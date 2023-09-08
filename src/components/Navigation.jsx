import React from "react";
import "../pages/Home.css";
import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <>
      <header>
        <nav>
          <img src="" alt="" />
          <a href="#">Home</a>
          <Link to={"/wallpaper"}>
            <a href="#">Wallpaper</a>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
