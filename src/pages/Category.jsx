
import PageTemplate from '../components/PageTemplate'
import BackBtn from '../components/BackBtn'
import { useLocation } from 'react-router-dom'
import Posts from '../components/Posts'

export default function Category() {
  let location = useLocation()
  let categoryName = location.pathname.split('/').at(-1).replaceAll("-", " ")
  return (
    <PageTemplate>
        <BackBtn/>
        <h1 className="text-4xl font-bold my-4">
          Category : {categoryName}
        </h1>
        <Posts/>
    </PageTemplate>
  )
}
