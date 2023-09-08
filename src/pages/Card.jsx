import React, { useEffect, useState } from "react";
import "./cards.css";
import axios from "axios";

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
    <>
      <div id="card--container">
        {data &&
          data.map((item, index) => (
            <div id="box" key={index}>
              <div id="nav">
                <div id="about--creator">
                  <div id="creator--image"></div>
                  <div id="creator--info">
                    <h2>{item.author}</h2>
                    <h4>Follow</h4>
                  </div>
                </div>
                <div id="operations">
                  <div id="operations--collect" className="operation">
                    <i className="ri-bookmark-line"></i>
                    <p>Collect</p>
                  </div>
                  <div id="operations--like" className="operation">
                    <i className="ri-heart-line"></i>
                    <p>Like</p>
                  </div>
                  <div id="operations--download" className="operation">
                    <i className="ri-download-line"></i>
                    <p>Free Download</p>
                  </div>
                </div>
              </div>
              <img src={item.image_url} alt={item.title} id="image" />
              <div id="details--Button">
                <i className="ri-information-line"></i>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Card;
