import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <header>
      <nav>
        <div id="hello">
          <a href="#">Home</a>
          <Link to={"/wallpaper"}>
            <a href="#">Wallpaper</a>
          </Link>
        </div>
        <div id="menu--icon">
          <i class="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
