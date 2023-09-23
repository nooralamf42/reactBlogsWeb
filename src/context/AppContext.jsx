import axios from "axios";
import { createContext, useState } from "react";
import {api} from "../api.js"
export const AppContext = createContext()

function AppContextProvider({children}){
    let [loading, setLoading] = useState(false)
    let [page, setPage] = useState(0)
    let [totalPages, setTotalPages] = useState(null)
    let [posts, setPosts] = useState([])
    let [blogs, setBlogs] = useState([])
    let [relatedBlogs, setRelatedBlogs] = useState([])

    async function fetchData(page=1, blogID, tag){
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

        else if(tag){
            try{
                setLoading(true)
                let response = await axios.get(`${api}?page=${page}&tag=${tag}`);
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

        else{
            try{
                setLoading(true)
                let response = await axios.get(`${api}?page=${page}`);
                let data = await response.data;
                setPage(data.page)
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
        setPage(page)
        fetchData(page)
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