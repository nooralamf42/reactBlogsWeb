import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Card from "./Card";
import Loading from "./Loading";


export default function Posts() {
  let { posts, loading, page} = useContext(AppContext);
  return (
    <div>
     {loading ? <Loading /> : <Card posts={posts} page={page}/>}
    </div>
  );
}
