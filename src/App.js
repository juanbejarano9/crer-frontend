import React, { useState, useEffect } from "react";

import Header from "./Components/Header/Header/Header";
import Banner from "./Components/Banner/Banner";
import Posts from "./Components/Posts/Posts";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

import './App.css'

function App() {

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

export default App;
