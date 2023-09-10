import React from "react";
import "./Home.css";
import Navigation from "../components/Navigation";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className="hero--section">
      <Navigation />
      <div className="center--container">
        <div className="center--wrap">
          {isAuthenticated ? (
            <>
              <h1>Pegasus Wallpapers</h1>
              <div className="search--container">
                <input
                  className="search--box"
                  type="text"
                  placeholder="Search for Photos"
                />
                <button>
                  <p>Search</p>
                </button>
              </div>
            </>
          ) : (
            <>
              <h1>Login to get access to our highest quality wallpapers.</h1>
              <div className="search--container">    
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
