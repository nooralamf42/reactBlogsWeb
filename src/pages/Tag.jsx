import { useContext} from 'react'
import PageTemplate from '../components/PageTemplate'
import { AppContext } from '../context/AppContext'
import { useLocation} from 'react-router-dom';
import BackBtn from '../components/BackBtn';
import Posts from '../components/Posts';

export default function Tag() {
  let {totalPages,posts} = useContext(AppContext);
  let location = useLocation()
  let tagName = location.pathname.replace("/tags/","")
  return (
    <PageTemplate orignal={totalPages>1 && true}>
        <>
          <BackBtn/>
          <h1 className='font-bold text-3xl mt-4'>Blogs tagged with <span className='text-blue-500'>#{tagName.replace(/%20/g, " ")}</span></h1>
          {
            posts.length ?
          <Posts/> : <h1 className='text-3xl font-semibold text-center mt-40'>No posts found!</h1>
          }
        </>
    </PageTemplate>
  )
}
