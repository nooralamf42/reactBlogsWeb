import Header from './components/Header'
import Posts from './components/Posts'
import Pagination from './components/Pagination'
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'

function App() {
  let {getPosts} = useContext(AppContext)

  useEffect(()=>{
    getPosts()
  }, [])
  return (
    <>
      <Header/>
      <Posts/>
      <Pagination/>
    </>
  )
}

export default App
