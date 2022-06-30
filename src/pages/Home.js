import React from "react";
import "./home.css"
const Home = () =>{
  return (
    <div className=" top-text ">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.freepik.com/free-photo/breakfast-diet-fruit-apple-centimeter_494741-48956.jpg?w=996"  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/young-attractive-girl-is-making-choice-healthy-harmful-food-holding-apple-burger-her-hands_118454-15627.jpg?w=996" class="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="httpshttps://img.freepik.com/free-photo/breakfast-diet-fruit-apple-centimeter_494741-48956.jpg?w=996//img.freepik.com/free-photo/meal-planning-food-arrangement_23-2149099838.jpg?t=st=1656580162~exp=1656580762~hmac=b13c4140c34a803cfc5032f375cca60f98392c19da29632c578c5ca9bef91899&w=996" class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
     

     





)

}
export default Home;