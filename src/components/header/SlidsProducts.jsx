import React from "react";
import { ContainerSlid } from "./slidsProducts";
import img from "./images/banner_yellow.png"
import img1 from "./images/banner-tenis.png"
import img2 from "./images/banner-tenis.png"
import img3 from "./images/banner-yel.png"
import img4 from "./images/banner-ore.png"
import { SeartResults } from "./SeartResults";
import { SlidsMenu } from "./SlidsMenu";


export default function SlidsProducts() {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <ContainerSlid>
        <SeartResults/>
          <div class="carousel-inner">
              {/*<div className="carousel-item">
                <img src={img} className="d-block w-100 imgSlids" alt="img" />
                </div>*/}
            <div className="carousel-item active">
                <img
                  src={img4}
                  className="d-block w-100 imgSlids"
                  alt="img"
                  />
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100 imgSlids" alt="img" />
              </div>
              <div className="carousel-item">
                <img src={img2} className="d-block w-100 imgSlids" alt="img" />
              </div>
          </div>
        </ContainerSlid>
        <SlidsMenu/>
      </div>
    </>
  );
}
