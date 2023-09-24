import axios from "axios";
import { createContext, useState } from "react";
import {api} from "../api.js"
import { useNavigate } from "react-router-dom";
export const AppContext = createContext()


function AppContextProvider({children}){
    let API = api;
    let [loading, setLoading] = useState(false)
    let [page, setPage] = useState(0)
    let [totalPages, setTotalPages] = useState(null)
    let [posts, setPosts] = useState([])
    let [blogs, setBlogs] = useState([])
    let [relatedBlogs, setRelatedBlogs] = useState([])

    let navigate= useNavigate()

    async function fetchData(page=1, blogID=false, tag=false, category=false){
        if(blogID){
            try{
                setLoading(true)
                let response = await axios.get(`https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogID}`);
                let data = await response.data;
                setBlogs([data.blog]);
                setRelatedBlogs(data.relatedBlogs);
            }
            
            catch(e){
                console.log(e)
            }
            setLoading(false)
        }
        else{
            API += `?page=${page}`
            if(tag)
                API += `&tag=${tag}`
            else if(category)
                API += `&category=${category}`
            try{
                console.log(api)
                setLoading(true)
                let response = await axios.get(API)
                let data = await response.data;
                setPage(data.page)
                console.log(data.page)
                setTotalPages(data.totalPages)
                setPosts(data.posts)
            }
            
            catch(e){
                console.log(e)
            }
            setLoading(false)
        }

    }

    function handlePage(page){
        navigate(`?page=${page}`);
        setPage(page)
    }
    
    const value = {
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        posts: posts,
        setPosts: setPosts,
        fetchData: fetchData,
        blogs,
        relatedBlogs,
        handlePage
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;