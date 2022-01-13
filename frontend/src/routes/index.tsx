import React from "react";
import { Route, Routes } from "react-router-dom";
import PostList from "../pages/Post/PostList";
import PostDetail from "../pages/Post/PostDetail";
import Home from "../pages/Home";

export default function index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="postList/:postId" element={<PostDetail />} />
      </Routes>
    </>
  );
}
