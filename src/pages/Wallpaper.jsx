import React from "react";
import Card from "../components/Card";
import "./Wallpaper.css";
import { Link } from "react-router-dom";

const Wallpaper = () => {

  
  const ByDate = () => {
    const sortedImages = apiData.sort((a, b) => new Date(b.date_uploaded) - new Date(a.date_uploaded));
    return (
      <div>
        <ImageList images={sortedImages} />
      </div>
    );
  }
  const ByLikes = () => {
    const sortedImages = apiData.sort((a,b) => a.likes-b.likes);
    return(
      <div>
        <ImageList images = {sortedImages}/>
      </div>
    )
  }
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
          <option  value="--">Sort</option>
          <option onClick="ByDate" value="Bydate">By Date</option>
          <option onClick="ByLikes" value="Bysize">By Popularity</option>
        </select>
      </div>
      <Card />
    </>
  );
};

export default Wallpaper;
