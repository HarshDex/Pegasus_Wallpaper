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
          <h1>Pegasus Wallpapers</h1>
          <input type="text" placeholder="Search for Photos" />
        </div>
      </header>
    </div>
  );
};

export default Home;
