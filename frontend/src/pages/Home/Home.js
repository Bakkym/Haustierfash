import React from "react";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import About from "../About/About";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="slider-container">
        <Slider />
      </div>
      <About />
      <div className="cat-preview">
        <div className="cat-col-1">
          <Link to={"/products?cat=kerchiefs"}>KERCHIEFS</Link>
        </div>
        <div className="cat-col-2">
          <Link to={"/products?cat=t-shirts"}>T SHIRTS</Link>
        </div>
        <div className="cat-col-3">
          <Link to={"/products?cat=costumes"}>COSTUMES</Link>
        </div>
        <div className="cat-col-4">
          <Link to={"/products?cat=accesories"}>ACCESORIES</Link>
        </div>
      </div>
    </div>
  );
}
