// import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
// import { arc } from "d3";
// import Footer from "./Components/Footer";
import Main from "./Components/Main";
// Adding comment
// import Home from "./Routecomponents/Home";
import About from "./Routecomponents/About";
// import Projects from "./Routecomponents/Projects";
import Contact from "./Routecomponents/Contact";

import Weather from "./WeatherProject/Weather";
import Movie from "./MoviAPI/Movie";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/Movie" element={<Movie />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
