import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="navbar__text">
    
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <Link className="nav-link active" aria-current="page" to="/"> HOME</Link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <Link className="nav-link active" aria-current="page" to="/about"> ABOUT</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link active" aria-current="page" to="/food"> FOOD </Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link active" aria-current="page" to="/daite"> DAITE</Link>
        </li>
     
      
       
      </ul>
      
    </div>
  </div>
</nav>
          
        
      
      </div>
    </nav>
  );
};

export default Navbar;