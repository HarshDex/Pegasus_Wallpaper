import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <div className="hero--section">
      <header>
        <nav>
          <img src="" alt="" />
          <a href="#">Home</a>
          <a href="#">About</a>
        </nav>
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
      </header>
    </div>
  );
};

export default Home;
