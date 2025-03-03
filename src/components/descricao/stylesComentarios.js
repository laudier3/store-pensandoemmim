import styled from "styled-components";

export const ContainerComentarioPai = styled.div`
  margin: auto;
  display: flex;
  width: 90%;
  margin-top: 5%;
`


export const ContainerComentario = styled.div`
  margin-top:60px;
  padding: 25px;
  background-color: Gainsboro;
  display: inline-block;
  margin: 20px;
  width: 300px;
  border: solid 0.5px;
  border-radius: 5px;

  @media(max-width: 923px) {
    width: 100%;
    margin: 5px;
  }

  & .btnButtonModalImageComentario {
    border: none;
  }

  & h1 {
    color: #222222;
    text-align: center;
    font-size: 3vw;
    margin-bottom: 1px;
    display: inline-block;

    @media(max-width: 923px) {
      font-size: 5vw;
      margin-bottom: 0px;
    }
  }

  & .imgName {
    margin-top: -3%;
    width: 50px;
    height: 50px;
    border-radius: 80px;
    display: inline-block;
    border: solid 1px;

    @media (max-width: 768px) and (max-width: 1200px) {
      width: 10%;
      font-size: 2.5vw;
      border-radius: 50%;
      height: 30px;
      margin-top: -120x;
    }
  }

  & h5 {
    font-size: 1.2vw;
    font-weight: bold;
    display: inline-block;
    margin-left: 5px;

    @media (max-width: 768px) {
      font-size: 2.5vw;
    }
  }

  & p {
    font-size: 1vw;
    display: inline-block;
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 2; // Quantidade de linhas
    -webkit-box-orient: vertical; 

    @media (max-width: 768px) {
      font-size: 2.5vw;
    }
  }

  & .imgList {
    width: 50px;
    height: 60px;
    margin: 3px;
    border-radius: 8px;

    @media (max-width: 923px) {
      width: 40px;
      height: 40px;
      margin: 3px;
      border-radius: 8px;
    }

    &:hover {
      border: solid 0.5px;
    }
  }

  & .btnButtonModal {
      margin-left: 70%;
      padding: 8px;
      background: aqua;
      outline: none;
      border: none;
      border-radius: 6px;
      font-weight: bold;

      &:hover {
        background: yellow;
        box-shadow: 0 0 0 0.3px black;
      }

      @media (max-width: 768px) {
        font-size: 2.6vw;
      }
    }
  

  @media (max-width: 923px) {
    padding: 5px;

    & .btnButtonModal {
      padding: 8px;
      margin-left: 150px;
      background: aqua;
      outline: none;
      border: none;
      border-radius: 6px;
      font-weight: bold;

      &:hover {
        background: #00FF00;
        box-shadow: 0 0 0 0.px black;
        padding: 12px;
      }

      @media (max-width: 768px) {
        font-size: 2.6vw;
      }
    }
  }

  @media (max-width: 768px) {
  }
  
`

export const ConatinerImageSlids = styled.div`
  background: transparent;
`
