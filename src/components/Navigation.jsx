import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  function naviGavi(){
    // let val = document.querySelector("#hello");
    // val.style.display = inline;
    console.log("hello world");
  }
  return (
    <header>
      <nav>
        <div id="hello">
          <a href="#">Home</a>
          <Link to={"/wallpaper"}>
            <a href="#">Wallpaper</a>
          </Link>
        </div>
        <div id="menu--icon"  onClick={naviGavi}>
          <i class="ri-menu-line"  onClick={naviGavi}></i>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
