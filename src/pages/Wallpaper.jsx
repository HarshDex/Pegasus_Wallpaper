import React from "react";
import Card from "../components/Card";
import "./Wallpaper.css";
import { Link } from "react-router-dom";

const Wallpaper = () => {
  return (
    <>
      <header className="secondary--header">
        <nav>
          <img src="" alt="" />
          <Link to={"/"}>
            <a style={{ color: "black" }} href="#">
              Home
            </a>
          </Link>
          <Link to={"/about"}>
            <a style={{ color: "black" }} href="#">
              About
            </a>
          </Link>
        </nav>
      </header>
      <h1 id="heading">Our Latest Wallpapers</h1>
      <div id="sort">
        <select name="Sort" id="Sorting--dropdown">
          <option value="--">Sort</option>
          <option value="Bydate">By Date</option>
          <option value="Bysize">By Size</option>
        </select>
      </div>
      <Card />
    </>
  );
};

export default Wallpaper;
