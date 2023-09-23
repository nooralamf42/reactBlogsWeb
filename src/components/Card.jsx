import React from "react";
import { Link } from "react-router-dom";
import Tags from "./Tags";

export default function Card({ posts, page}) {
  return posts.map((post, index) => (
    <div key={index} className="my-6">
      <Link className="text-xl font-bold mb-2 hover:underline" to={`/blog/${post.id}`}>{post.title}</Link>
      <p>By <i>{post.author}</i> on <a className="font-semibold" href="">{post.category}</a></p>
      <p>Posted on {post.date}</p>

      <p className="text-md my-4 leading-6 font-[500]">{post.content}</p>
      <Tags tags={post.tags} />
    </div>
  ));
}
