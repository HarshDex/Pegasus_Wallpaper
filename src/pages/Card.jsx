import React from "react";
import "./cards.css"
const Card = () => {
  return (
    <>
      <div id="card--container">
        <div id="box">
          <div id="nav">
            <div id="about--creater">
              <div id="creater--image">

              </div>
              <div id="creater--info"> 
                  <h2>
                    MakeInfinity
                  </h2>
                  <h4>
                    Follow
                  </h4>
              </div>
            </div>
            <div id="operations">
              <div id="operations--collect" class = "operation">
                <i class="ri-bookmark-line"></i>
                <p>Collect</p>
              </div>
              <div id="operations--like" class = "operation">
                <i class="ri-heart-line"></i>
                <p>Like</p>
              </div>
              <div id="operations--download" class = "operation">
              <i class="ri-download-line"></i>
                <p>Free Download</p>
              </div>
            </div>
          </div>
          <div id="image">

          </div>
          <div id="details--Button">
            <i class="ri-information-line"></i>
          </div>
        </div>
      </div>
    </>
  )
};

export default Card;
