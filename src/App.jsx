import { useLocation, useSearchParams } from 'react-router-dom'
import MyRoutes from './path/path'
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'

function App() {
  let {fetchData} = useContext(AppContext)
  let location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams()
  useEffect(()=>{
    // if(location.includes("blog")){
    //   let blogId = location.split("/").at(-1)
    //   fetchData(1,blogId, false)
    // }
    let page = searchParams.get("page") ?? 1
    console.log(location.search)
    if(location.pathname.includes("tags")){
      let tag = location.pathname.split("/").at(-1)
      fetchData(page,false, tag)
    }
    else{
      fetchData(page)
    }
  }, [location])
  return (
    <MyRoutes/>
  )
}

export default App
