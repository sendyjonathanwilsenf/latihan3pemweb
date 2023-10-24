// src/App.js
import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

function App() {
  return (
      <>
      <Navbar />
      <Hero />
      <Routes>
        <Route path='/' Component={Menu}/>
        <Route path='/about' Component={AboutPage}/>
        <Route path='/contact' Component={ContactPage}/>
      </Routes>
      <Footer />
      </>
      
      
  
  );
}

export default App;
