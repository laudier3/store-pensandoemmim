/* eslint-disable eqeqeq */
import { useSelector } from "react-redux";
import { Modal } from "../modal/Modal";
//import { SlidsDescriptionOfertas } from "./SlidsDescriptionOfertas"
import { ContainerComentario, ContainerComentarioPai } from "./stylesComentarios";
import { ModalImageComentario } from "../modal/ModalImageComentario";
import { useState } from "react";
import { TiStarHalfOutline } from "react-icons/ti";
import { GoStarFill } from "react-icons/go";
///import { Widgets } from "@material-ui/icons"

export const Comentarios = () => {
  //const teste = window.history.pushState(null, null, "/")

  //console.log(teste, "r")

  //window.addEventListener("popstate", detectHostory)

  //Js Detect Browser Back Button

  //const r = window.history.pushState({id:1}, "?q=1234&u=beware")

  /*function detectHostory(){
    window.location.reload()
  }*/

  //window.history.pushState({id:1}, "?q=1234&u=beware")

  const [datacoment, setDatacomente] = useState([]);

  //const localId = localStorage.getItem("id");
  //let url = window.location.pathname;
  //let parts = url.split("/");
  let localId = "f7bdbd1d-cf6e-49b8-a716-9b1690360388"
  const comentarios = useSelector(
    (comnetarioSlice) => comnetarioSlice.comentarios.items
  );

  const coment = [comentarios];

  const comnetFilter = coment[0]?.filter(
    (comentData) => comentData.idProduct === localId
  );
  //console.log(comnetFilter, " t");

  return (
    <ContainerComentarioPai>
      <>
        <section>{/*<SlidsDescriptionOfertas/>*/}</section>
        <div>
          {/*<button
          type="button"
          className="btnButtonModal"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal" 

        >
          Deixe seu comentario
        </button>*/}
          {comnetFilter[0] ? <h3>Avaliações Do Produto</h3> : ""}

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-center" id="exampleModalLabel">
                    Deixe sua avaliação
                  </h5>
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    className="btn-outline-secondary"
                    style={{
                      border: "none",
                      fontSize: "30px",
                      borderWidth: "bold",
                      color: "red",
                    }}
                  >
                    X
                  </button>
                </div>
                <div className="modal-body text-dark">
                  <Modal />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-block "
                    data-bs-dismiss="modal"
                  >
                    Fecha
                  </button>
                </div>
              </div>
            </div>
          </div>
          {comnetFilter.map((rescoment) => {
            const { id, name, message, image, imgName } = rescoment;

            const imgList = [image];

            //console.log(imgList)

            return (
              <ContainerComentario>
                <div>
                  <img src={imgName} alt="img" className="imgName" />
                  <h5>
                    {name} <br />
                    <GoStarFill className="text-warning estrelas2" />
                    <GoStarFill className="text-warning estrelas2" />
                    <GoStarFill className="text-warning estrelas2" />
                    <GoStarFill className="text-warning estrelas2" />
                    <TiStarHalfOutline className="text-warning estrelas" />
                  </h5>
                </div>
                <div>
                  <p>{message}</p>
                </div>

                <div>
                  <button
                    type="button"
                    className="btnButtonModalImageComentario"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalImagesComentario"
                    onClick={() => setDatacomente(id)}
                  >
                    <div>
                      {imgList[0].map((resImg) =>
                        //console.log(resImg, "res 2"),
                        resImg == "" ? (
                          ""
                        ) : (
                          <img
                            src={resImg}
                            alt="comentarios"
                            className="imgList"
                          />
                        )
                      )}
                    </div>
                  </button>
                  <br />

                  <div
                    className="modal fade bg-transparent"
                    id="exampleModalImagesComentario"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content bg-transparent border-0">
                        <div className="modal-header border-0">
                          <button
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            className=""
                            style={{
                              position: "absolute",
                              marginLeft: "83%",
                              marginTop: 30,
                              width: 30,
                              border: "none",
                              background: "red",
                              color: "white",
                              fontWeight: "bold"
                            }}
                          >
                            X
                          </button>
                          <br />
                        </div>
                        <div className="modal-body text-dark">
                          <ModalImageComentario
                            data={datacoment}
                            comnetario={comnetFilter}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ContainerComentario>
            );
          })}
        </div>
      </>
    </ContainerComentarioPai>
  );
};
