import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Tag from "../pages/Tag";
import NotFound from "../pages/NotFound";
import Blog from "../pages/Blog";

export default function MyRoute() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/category/:categoryName" Component={Category} />
      <Route path="/tags/:tagName" Component={Tag} />
      <Route path="/blog/:blogName" Component={Blog} />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
}
