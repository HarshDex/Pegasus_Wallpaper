import React, { useContext, useState, useEffect } from "react";
import "./SingleWallpaper.css";
import { useParams } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

const SingleWallpaper = () => {
  const apiData = useContext(GlobalContext);
  const { index } = useParams();
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    const filteredData = apiData.filter((item, idx) => idx === parseInt(index));
    if (filteredData.length > 0) {
      setNewData(filteredData);
    } else {
      console.log("Not Found");
    }
  }, [apiData, index]);

  return (
    <>
      <div id="card--container">
        {newData.length > 0 ? (
          newData.map((item, idx) => (
            <div id="box" key={idx}>
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
          ))
        ) : (
          <p>Not Working</p>
        )}
      </div>
    </>
  );
};

export default SingleWallpaper;
