import React from "react";

import "./Home.css";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="hero--section">
      <Navigation />
      <div className="center--container">
        <div className="center--wrap">
          <h1>Pegasus Wallpapers</h1>
          <div className="search--container">
            <input
              className="search--box"
              type="text"
              placeholder="Search for Photos"
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
