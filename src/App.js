import React from "react";
import Daite from "./pages/Daite";
import Food from "./pages/Food";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./componets/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() 

{
  return (
  

     
     
    

<BrowserRouter>
<div className="App">
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/daite" element={<Daite />} />
    <Route path="/food" element={<Food />} />
  </Routes>
  </div>
      </BrowserRouter>
      
   
 
  
 
    
  
)
};

export default App;
