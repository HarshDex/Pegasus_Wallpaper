import React, { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";
import Navigation from "./Navigation";

const url =
  "https://pegasuswallpaper-c09bf-default-rtdb.firebaseio.com/images.json";

const Card = () => {
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    try {
      const res = await axios.get(url);
      console.log(res.data);
      // Convert the object values into an array
      const dataArray = Object.values(res.data);

      console.log("DATA ARRAY: ", dataArray);

      setData(dataArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <div className="grid-container">
      {data &&
        data.map((item, index) => {
          return (
            <div className="grid-item" key={index}>
              <img src={item.image_url} alt="" />
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
          );
        })}
    </div>
  );
};

export default Card;
