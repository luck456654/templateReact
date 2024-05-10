import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect } from "react";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';



function App(props) {
  useEffect(() => {
    //alert("Приветствую!!!")
  }, []); 
  return (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
    );
  

 
}


export default App