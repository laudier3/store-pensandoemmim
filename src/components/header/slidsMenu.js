// CSS do component de slidsMenu

import styled from "styled-components"

export const Coontainer = styled.div`
  //background-image: linear-gradient(#03EBEB, #000000);
  background-image: linear-gradient(#001414,rgb(33, 128, 128), #EDEDED);
  //background-color: transparent;
  width: 100%;
  //display: flex;
  align-items: center;
  justify-content: center;
  //margin: auto;
  border: none;
  margin-top: -100px;

  @media(max-width: 768px) {
    height: 30px;
    margin-top: -42px;
  }

  & .carousel {
    //border: solid 1px;
    width: 82%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    overflow-x: auto;
    scroll-behavior: smooth;
    text-decoration-line: none;
    //border: solid 1px;
    gap: 20px;

    @media (max-width: 923px) and (max-width: 1200px) {
      width: 100%;
      display: flex;
      margin: auto;
      overflow-x: auto
    }

    &::-webkit-scrollbar {
      display: none;
    }

    & .item {
      background-color: white;
      margin: auto;
      display: flex;
      padding: 10px;
      width: 65px;
      height: 65px;
      border-radius: 50px;
      flex: none;
      cursor: pointer;
      color: aqua;
      margin-top: 5px;
      text-decoration-line: none;
      border: solid 1px;

      @media (max-width: 923px) and (max-width: 1200px)  {
        width: 35px;
        height: 35px;
      }
      
      &:hover {
        background-color: darkgray;
      }

      & .image {
        & img {
          width: 55px;
          height: 55px;
          object-fit: cover;
          border-radius: 60px;
          margin-left: -5px;
          margin-top: -4px;
        }
        @media (max-width: 768px) {
          & img {
            width: 30px;
            height: 4vh;
            object-fit: cover;
            border-radius: 60px;
            margin-left: -9px;
            margin-top: -13px;
          }
        }
      }
    }

    & .info {
      margin-top: 16px;
      width: 100%;
      display: flex;
      margin: auto;
      text-align: center;
      
      & span {
        text-decoration: none;
        color: #000000;
        text-align: center;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }

      & .name {
        text-align: center;
        font-size: 12.5px;
        font-weight: bold;
        cursor: pointer;
        padding: 5px;
        text-decoration: none;

        @media (max-width: 923px){
          font-size: 10px;
          margin-left: -6px;
          text-align: center;
          width: 50px;
          //border: 1px solid red;
        }
      }

      @media (max-width: 923px){
        text-align: center;
        width: 110%;
        margin: auto;
        display: flex;
      }

    }
  }

  & .buttons1 {
    left: 0;
    position: absolute;
    width: 2%;
    height: 170px;
    /*background-color:rgba(255, 255, 255, 0);*/
    /*background-color: green;*/
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    /*overflow: hidden;*/
    cursor: pointer;
    opacity: 1;
    margin-left: 0%;
    margin-top: -40px;

    @media (max-width: 10200px){
      margin-top: -44px;
    }

    @media (max-width: 968px){
      opacity: 0;
      margin-top: -44px;
      display: none;
    }
    
}

& .buttons2 {
  right: 0;
  position: absolute;
  width: -2%;
  height: 170px;
  background-color:rgba(255, 255, 255, 0);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  /*overflow: hidden;*/
  cursor: pointer;
  opacity: 1;
  margin-top: -105px;

  @media (max-width: 10200px){
      margin-top: -94px;
    }

  @media (max-width: 968px){
    opacity: 1;
    margin-top: -86px;
    display: none;
  }
}

& button {
  border: none;
  background: transparent;
} 
`
export const DivContainerHederFixo = styled.div`
  position: fixed;
`