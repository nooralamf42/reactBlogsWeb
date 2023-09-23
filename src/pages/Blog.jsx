import React, { useContext, useEffect } from "react";
import PageTemplate from "../components/PageTemplate";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Card from "../components/Card";
import Loading from "../components/Loading";
import BackBtn from "../components/BackBtn";

export default function Blog() {
  let { loading, blogs, relatedBlogs, page} = useContext(AppContext);

  console.log(relatedBlogs)
  return (
    <PageTemplate orignal={false}>
      <BackBtn/>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Card posts={blogs} page={page} />
          <h1 className="text-4xl font-bold ">Related Blogs</h1>
          <Card posts={relatedBlogs} />
        </>
      )}
    </PageTemplate>
  );
}
