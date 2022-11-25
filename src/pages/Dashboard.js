import React, { useState, useEffect } from "react";
import { VscEmptyWindow } from "react-icons/vsc";

import Header from "../components/Header/Header/Header";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

import { usePosts } from "../context/postContext";

export function Dashboard() {
  const { posts } = usePosts();

  if (posts.length === 0)
    return (
      <div className="d-flex justify-content-center">
        <div className="text-white p-4 m-4 bg-main-color d-inline-flex border rounded-4 align-items-center">
          <VscEmptyWindow className="w-50 h-50 text-white" />
          <h1>No hay Posts aún</h1>
        </div>
      </div>
    );

  return (
    <div>
      <Header />
      <h1 className="fs-1 fw-bold text-white p-5">Dashboard</h1>
      <div>
        {posts.map((post) => (
          <div key={post._id}>{post.title}</div>
        ))}
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Dashboard;
