import React /* , { useState, useEffect } */ from "react";
import { HomePage, PostForm, NotFoundPage } from "./pages";
import { PostContainer } from "./context/postContext";

import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App appBackground">
      <PostContainer>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/new" element={<PostForm />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </PostContainer>
    </div>
  );
}

export default App;
