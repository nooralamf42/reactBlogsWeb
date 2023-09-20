import React, { useContext } from 'react'
import Container from './Container'
import { AppContext } from '../context/AppContext'
import Card from './Card';

export default function Posts() {

    let {posts, loading} = useContext(AppContext);
  return (
    <div className="my-28">
    <Container>
        <Card posts={posts}/>
    </Container>
    </div>
  )
}
