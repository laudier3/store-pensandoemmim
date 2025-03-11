import React from "react";
import { ContainerSlid, SlidContainer } from "./slidsProducts";
//import img from "./images/banner_yellow.png"
import img1 from "./images/banner-casal.png"
import img2 from "./images/E- Commerce Product Facebook Cover Design.psd.gif"
import img3 from "./images/banner-cals2.png"
import img4 from "./images/banner-relo.png"
//import { SeartResults } from "./SeartResults";
import { SlidsMenu } from "./SlidsMenu";
import { Link } from "react-router-dom";


export default function SlidsProducts() {
  return (
    <SlidContainer>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <ContainerSlid>
          <div class="carousel-inner">
              {/*<div className="carousel-item">
                <img src={img} className="d-block w-100 imgSlids" alt="img" />
                </div>*/}
            <div className="carousel-item active">
             <Link to="/relogio">
                <img
                  src={img4}
                  className="d-block w-100 imgSlids"
                  alt="img"
                />
             </Link>
              </div>
              <div className="carousel-item">
              <Link to="calca">
                <img src={img3} className="d-block w-100 imgSlids" alt="img" />
              </Link>
              </div>
              <div className="carousel-item">
              <Link to="calcados">
                <img src={img2} className="d-block w-100 imgSlids" alt="img" />
              </Link>
              </div>
              <div className="carousel-item">
              <Link to="vestido">
                <img src={img1} className="d-block w-100 imgSlids" alt="img" />
              </Link>
              </div>  
          </div>
        </ContainerSlid>
        <SlidsMenu/>
      </div>
    </SlidContainer>
  );
}
