import React, { useState, useContext, useEffect } from "react";
import Card from "../components/Card";
import "./Wallpaper.css";
import { Link } from "react-router-dom";
import GlobalAppContext from "../context/GlobalContext";

const Wallpaper = () => {
  const apiData = useContext(GlobalAppContext);
  const [data, setData] = useState([...apiData]);

  const byDate = () => {
    const sortedData = [...data].sort(
      (a, b) => new Date(b.date_uploaded) - new Date(a.date_uploaded)
    );
    setData(sortedData);
  };

  const byLikes = () => {
    const sortedData = [...data].sort((a, b) => b.likes - a.likes);
    setData(sortedData);
  };

  // Use useEffect to update data when apiData changes
  useEffect(() => {
    setData([...apiData]);
  }, [apiData]);

  return (
    <>
      <header className="secondary--header">
        <nav>
          {/* <img src="" alt="" /> */}
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
        <select
          name="sort"
          id="sorting--dropdown"
          onChange={(e) => {
            const selectedOption = e.target.value;
            if (selectedOption === "byDate") {
              byDate();
            } else if (selectedOption === "bySize") {
              byLikes();
            }
          }}
        >
          <option value="">Sort</option>
          <option value="byDate">By Date</option>
          <option value="bySize">By Popularity</option>
        </select>
      </div>
      <Card data={data} />
    </>
  );
};

export default Wallpaper;
