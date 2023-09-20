import axios from "axios";
import { createContext, useState } from "react";
import {api} from "../api.js"
export const AppContext = createContext()

function AppContextProvider({children}){
    let [loading, setLoading] = useState(false)
    let [page, setPage] = useState(0)
    let [totalPages, setTotalPages] = useState(null)
    let [posts, setPosts] = useState([])

    async function getPosts(page=1){
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
    
    function getNewPost(number){
        getPosts(page+number)
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
        getPosts: getPosts,
        getNewPost: getNewPost
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;