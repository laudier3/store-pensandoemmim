/* eslint-disable eqeqeq */
import { useState, useEffect } from 'react';
import { ConatinerModalImageSlids } from "./modal";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from 'axios';

//console.clear()
export const ModalImageComentario = ({ data, comnetario }) => {
  const arrey = [comnetario];

  const [dataList, setData] = useState([]);

  useEffect(() => {
    (async() => {
      const req = await axios.get("http://103.199.187.229:3000/comentario")
      const res = await req.data;

      setData(res)
    })()
  },[])

  //const localId = localStorage.getItem("id");
  let url = window.location.pathname;
  let parts = url.split("/");
  let localId = parts.pop() || parts.pop();

  //window.history.pushState(null, null, "/desc")
  //const ev = window.history.back()
  //const str =  window.history.pushState(null, null, "/desc")

  if (window.history.length) {
    const ev = document.querySelector("#root");

    ev.addEventListener("hidePrevented.bs.modal", () => {
      alert(window.history.length);
    });
  }

  const filterImage = arrey[0]?.filter((resp) => resp.id == data);

  const comnetFilterVPS = dataList?.filter(
    (comentData) => comentData.idProduct === localId
  );


  console.log(comnetFilterVPS[0], "k")
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
            {comnetFilterVPS.map((imgData) => {
              const { images } = imgData;
              const loopImg = [images[0], images[1], images[2], images[3]];

              return (
                <div key={ImageData}>
                  {loopImg.map((res) =>
                    res ? (
                      <SwiperSlide
                        key={res}
                        style={{ width: "100%", height: "80vh" }}
                      >
                        <img
                          src={`http://103.199.187.229:3000/uploads/${res}`}
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
