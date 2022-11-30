import React /* , { useState, useEffect } */ from "react";
import { HomePage, PostForm, NotFoundPage,Dashboard } from "./pages";
import { PostProvider } from "./context/postContext";

import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App appBackground">
      <PostProvider>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/new" element={<PostForm />}></Route>
          <Route path="/posts/:id" element={<PostForm />}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </PostProvider>
    </div>
  );
}

export default App;
