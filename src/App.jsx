import { useState } from 'react'
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Hero from './components/Hero';
import Services from './components/Services';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/Nav" element={<Nav />} />
          <Route path="/" element={<Landing />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
