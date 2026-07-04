import { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import './App.css'

import Navbar from './Components/Navbar'
import MainPage from './Pages/MainPage'
import About from './Pages/About'
import Services from './Pages/Services'
import Projects from './Pages/Projects'
import Contacts from './Pages/Contacts'

import ScrollToTop from "./ScrollToTop";

function App() {

  return (
    <BrowserRouter basename='/invictus/'>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
