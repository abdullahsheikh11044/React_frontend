import React from "react";
import Posts from "./components/posts/PostsList";
import Postshow from "./components/posts/Postshow";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function RouteFile() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/index" element={<Posts />} />
          <Route path="/postShow/:id" element={<Postshow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouteFile;
