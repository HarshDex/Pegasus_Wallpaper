import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="grid-container">
      {props.data.map((item, index) => (
        <Link to={`/download/${index}`} key={index}>
          <div className="grid-item" key={index}>
            <img src={item.image_url} alt="" loading="lazy" />
            <div className="container-about">
              <div className="author-profile">
                <img src={item.image_url} alt="" />
              </div>
              <div className="author-about">
                <h3>{item.author}</h3>
              </div>
            </div>
            <i className="ri-download-line"></i>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
