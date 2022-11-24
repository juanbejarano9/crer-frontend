import React, { useState, useEffect, useContext } from "react";

import Header from "../components/Header/Header/Header";
import Banner from "../components/Banner/Banner";
import Posts from "../components/Posts/Posts";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

import {usePosts} from "../context/postContext"

export function HomePage(){
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


  const myContext = usePosts();
  console.log(myContext)
  
  return (
    <div className="App appBackground">
      <Header />
      <Banner />
      <Posts />
      <Contact
        width={windowDimension.winWidth}
        height={windowDimension.winHeight}
      />
      <Footer />

      
      <div class="bg-white">
        <p>Tamaño de la pantalla: </p>
        <p>Width:<strong>{windowDimension.winWidth}</strong></p>
        <p>Height:<strong>{windowDimension.winHeight}</strong></p>
      </div>
    </div>
  );
}