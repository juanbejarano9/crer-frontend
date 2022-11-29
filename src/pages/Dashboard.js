import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { VscEmptyWindow } from "react-icons/vsc";
import {Toaster} from 'react-hot-toast'

import "../components/Dashboard/Card/DashCard.css"

import Header from "../components/Header/Header/Header";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import DashCard from "../components/Dashboard/Card/DashCard";

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
      <h1 className="fs-1 fw-bold text-white p-4 m-0">Dashboard</h1>
      <Link to="/new" className="btn btn-success m-4">Create New Post</Link>
      <div className="container text-center row g-4 m-auto">
        {posts.map((post) => (
          <div key={post._id} className="col-4 dashCard">
            <DashCard post={post}/>
          </div>
        ))}
      </div>
      <Toaster/>
      <Contact />
      <Footer />
    </div>
  );
}

export default Dashboard;
