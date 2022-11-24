import React, { useState, useEffect } from "react";

import Header from "../components/Header/Header/Header";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

export function NotFoundPage() {
  return (
    <div>
      <Header />
        <h1 className="fs-1 fw-bold text-white p-5">ERROR 404 - Page Found</h1>
      <Contact/>
      <Footer />
    </div>
  )
}

export default NotFoundPage