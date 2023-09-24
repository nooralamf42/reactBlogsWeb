import { useLocation, useSearchParams } from 'react-router-dom'
import MyRoute from './route/Route'
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'
import Route from './route/Route'

function App() {
  let {fetchData} = useContext(AppContext)
  let location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams()
  useEffect(()=>{
    let page = searchParams.get("page") ?? 1;

    console.log(page)
    if(location.pathname.includes("blog")){
      let blogId = location.pathname.split("/").at(-1)
      fetchData(1,blogId, false, false)
    }

    else if(location.pathname.includes("tags")){
      let tag = location.pathname.split("/").at(-1).replaceAll("-", " ")
      fetchData(+page,false, tag, false)
    }

    else if(location.pathname.includes("category")){
      let category = location.pathname.split("/").at(-1).replaceAll("-", " ")
      fetchData(+page,false,false, category)
    }

    else{
      fetchData(page)
    }
  }, [location])
  return (
    <MyRoute/>
  )
}

export default App
