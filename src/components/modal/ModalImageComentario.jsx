/* eslint-disable eqeqeq */
//import { useState } from 'react';
import { ConatinerModalImageSlids } from "./modal";
import { Swiper, SwiperSlide } from "swiper/react";

//console.clear()
export const ModalImageComentario = ({ data, comnetario }) => {
  //const arrey = [comnetario];

  //window.history.pushState(null, null, "/desc")
  //const ev = window.history.back()
  //const str =  window.history.pushState(null, null, "/desc")

  if (window.history.length) {
    const ev = document.querySelector("#root");

    ev.addEventListener("hidePrevented.bs.modal", () => {
      alert(window.history.length);
    });
  }

  const filterImage = comnetario?.filter((resp) => resp.id == data);
 // const listImagens = [filterImage]

  //console.log(data, "k", filterImage, "l")
  return (
    <ConatinerModalImageSlids>
      <>
        {
          <Swiper
            slidesPerView={1}
            pagination={{ onClick: true }}
            grabCursor={true}
            navigation
            style={{ width: "100%", height: "80vh", color: "aqua" }}
          >
            {filterImage.map((imgData) => {
              const { images } = imgData;
              const loopImg = [images[0], images[1], images[2], images[3]];
              //console.log(loopImg)

              return (
                <div key={ImageData}>
                  {loopImg.map((res) =>
                    res ? (
                      <SwiperSlide
                        key={res}
                        style={{ width: "100%", height: "80vh" }}
                      >
                        <img
                          src={`https://app2.apinonshops.store/uploads/${res}`}
                          //style={{ width: "100%", height: "70vh" }}
                          id="logo"
                          alt="Imagem não encontrada"
                          className="imageModalComente"
                        />
                      </SwiperSlide>
                    ) : (
                      ""
                    )
                  )}
                </div>
              );
            })}
          </Swiper>
        }
      </>
    </ConatinerModalImageSlids>
  );
};
