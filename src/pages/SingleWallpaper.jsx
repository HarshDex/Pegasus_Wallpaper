import React, { useContext, useState, useEffect } from "react";
import "./SingleWallpaper.css";
import { useParams } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";

const SingleWallpaper = () => {
  const apiData = useContext(GlobalContext);
  const { title } = useParams();
  const [newData, setNewData] = useState([]);

  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    if (newData.length > 0) {
      const item = newData[0]; // Assuming there's only one item in newData
      fetch(item.image_url)
        .then((response) => response.blob())
        .then((blob) => {
          saveAs(blob, `${item.title}.jpg`); // Change the filename as needed
          setDownloaded(true);
        })
        .catch((error) => {
          console.error("Error downloading wallpaper:", error);
        });
    }
  };

  useEffect(() => {
    const filteredData = apiData.filter((item) => item.title === title);
    console.log("FILTERED DATA", filteredData);
    if (filteredData.length > 0) {
      setNewData(filteredData);
    } else {
      console.log("Not Found");
    }
  }, [apiData, title]);

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
      <div className="card--container">
        {downloaded && <p>File Downloaded Sucessfully!!</p>}

        {newData.length > 0 ? (
          newData.map((item, idx) => (
            <div className="box" key={idx}>
              <div className="nav">
                <div className="about--creator">
                  <div className="creator--image"></div>
                  <div className="creator--info">
                    <h2>{item.author}</h2>
                    <h4>Follow</h4>
                  </div>
                </div>
                <div className="operations">
                  <div className="operation collect">
                    <i className="ri-bookmark-line"></i>
                    <p>Collect</p>
                  </div>
                  <div className="operation like">
                    <i className="ri-heart-line"></i>
                    <p>Like</p>
                  </div>
                  <div onClick={handleDownload} className="operation download">
                    <i className="ri-download-line"></i>
                    <p>Free Download</p>
                  </div>
                </div>
              </div>
              <div className="image--container">
                <img src={item.image_url} alt={item.title} />
              </div>

              <div className="details--Button">
                <i className="ri-information-line"></i>
              </div>
            </div>
          ))
        ) : (
          <p>Not Found</p>
        )}
      </div>
    </>
  );
};

export default SingleWallpaper;
