import React, { useContext, useEffect } from 'react'
import PageTemplate from '../components/PageTemplate'
import Posts from '../components/Posts'

export default function Home() {
  return (
    <PageTemplate orignal={true}>
        <Posts/>
    </PageTemplate>
  )
}
