import React from "react";
import { ContainerSlid } from "./slidsProducts";
import img1 from "./images/Black Friday Ecommerce Website Banner Design.psd (1).png"
import img2 from "./images/E- Commerce Product Facebook Cover Design.psd.png"
import img3 from "./images/banner-25.png"

export default function SlidsProducts() {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <ContainerSlid>
            {/*<div className="carousel-item">
              <img src="https://http2.mlstatic.com/D_NQ_651906-MLA82294068715_022025-OO.webp" className="d-block w-100" alt="img" />
            </div>*/}
           <div className="carousel-item active">
              <img
                src={img1}
                className="d-block w-100"
                alt="img"
              />
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="img" />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="img" />
            </div>
          </ContainerSlid>
        </div>
      </div>
    </>
  );
}
