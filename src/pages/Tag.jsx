import React, { useContext, useEffect } from 'react'
import PageTemplate from '../components/PageTemplate'
import { AppContext } from '../context/AppContext'
import { useLocation, useSearchParams } from 'react-router-dom';
import BackBtn from '../components/BackBtn';
import Card from '../components/Card';

export default function Tag() {
  let {totalPages,loading, posts, page} = useContext(AppContext);
  let location = useLocation()
  let tagName = location.pathname.replace("/tags/","")
  return (
    <PageTemplate orignal={totalPages>1 && true}>
        <>
          <BackBtn/>
          <h1 className='font-bold text-3xl mt-4'>Blogs tagged with <span className='text-blue-500'>#{tagName.replace(/%20/g, " ")}</span></h1>
          <Card posts={posts} page={page}/>
        </>
    </PageTemplate>
  )
}
