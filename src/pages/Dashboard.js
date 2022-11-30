import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { VscEmptyWindow } from "react-icons/vsc";
import { Toaster } from "react-hot-toast";

import "../components/Dashboard/Card/DashCard.css";

import Header from "../components/Header/Header/Header";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import DashCard from "../components/Dashboard/Card/DashCard";

import { usePosts } from "../context/postContext";

export function Dashboard() {
  const { posts } = usePosts();

  /* Parte del Use State */
  const [windowDimension, detectHW] = useState({
    /* Valores Iniciales */
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  /* Funcion que detecta el tamaño de la pantalla - Una funcion del tipo Arrow */
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };
  /* Use Effect que es activado luego de renderizar el cambio de tamaño de pantalla
, al detectar el cambio de pantalla, llama a la funcion que detecta el tamaño de la pantalla */
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    /* Remueve el eventListener cuando termina*/
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [
    windowDimension,
  ]); /* Esta funcion es para evitar que se agregen infinitamente EventListeners */

  return (
    <div>
      <Header />
      <h1 className="fs-1 fw-bold text-white p-4 m-0">Dashboard</h1>
      <h2 className="fs-3 fw-bold text-white p2 mx-4">
        Posts ({posts.length})
      </h2>
      <Link to="/new" className="btn btn-success m-4">
        Create New Post
      </Link>
      <div className="container text-center row g-4 m-auto">
        {posts.map((post) => (
          <div key={post._id} className="col-md-6 col-sm-12 dashCard">
            <DashCard post={post} />
          </div>
        ))}
      </div>
      <Toaster />
      <Contact
        width={windowDimension.winWidth}
        height={windowDimension.winHeight}
      />
      <Footer />
    </div>
  );
}

export default Dashboard;
