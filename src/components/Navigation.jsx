import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navigation = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } =
    useAuth0();

  useEffect(() => {
    console.log("isAuthenticated:", isAuthenticated, "user: ", user);
  }, [isAuthenticated]);

  if (isLoading) {
    // Handle loading state, e.g., show a loading spinner
    return <div>Loading...</div>;
  }

  return (
    <header class="main-header">
      <nav>
        <div class="header-content">
          {user ? (
            <Link to={"/"}>
              <a href="#" aria-label="Home" class="nav-link">
                {`Hi, ${user.name.slice(0, user.name.indexOf("@"))}`}{" "}
              </a>
            </Link>
          ) : (
            <Link to={"/"}>
              <a href="#" aria-label="Home" class="nav-link">
                Home
              </a>
            </Link>
          )}

          {isAuthenticated ? (
            <Link to={"/wallpaper"}>
              <a href="#" aria-label="Wallpaper" class="nav-link">
                Wallpaper
              </a>
            </Link>
          ) : (
            <Link to={"/"}>
              <a href="#" aria-label="Wallpaper" class="nav-link">
                Wallpaper
              </a>
            </Link>
          )}

          {isAuthenticated ? (
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              aria-label="Log Out"
              class="auth-button"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              aria-label="Log In"
              class="auth-button"
            >
              Log In
            </button>
          )}
        </div>
        <div class="menu-icon" id="menu-icon"></div>
      </nav>
    </header>
  );
};

export default Navigation;
