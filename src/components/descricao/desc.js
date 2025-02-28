import styled from "styled-components";

export const ProductDescImage2 = styled.div`
  grid-area: l;
  width: 50vw;
  //margin-left: 110px;
  background: white;
  margin-top: -120px;

  & .swiper {
    width: 100%;
    color: transparent;
  }
 
  & img {
    width: 42vw;
    //object-fit: cover;
    height: 80vh;
    margin-left: 80px;
  }

  
  &::-webkit-scrollbar {
    display: none;
  }

`

export const ImageProducts = styled.div`
  width: 80%;
  margin-top: 0px;
  //border: solid 1px;
  margin-left: 130px;

  & img {
    width: 100%;
  }

  & .padraoImg {
    width: 620px;

    @media (max-width: 720px) and (max-width: 1200px)  {
      width: 380px;
      margin-left: -32px;
      //border: solid 1px;
      margin-top: -15px;
    }
  }

  @media (max-width: 720px) and (max-width: 1200px) {
    width: 80%;
    margin-top: 5px;
    //border: solid 1px;
    margin-left: 0px;
  }
`

export const ProductImageMini2 = styled.div`
  width: 100px;
  margin-top: -100px;
  margin-left: -770px;

  & .imgMini {
    margin: 1px;
    
    & img {
      width: 5vw;
      height: 5vw;
      border: solid 1px;
      border-color: #828282;
      padding: 5px;

      &:hover {
        border: solid 2px;
        border-color: aqua;
      }

      @media screen and (max-width: 768px) {

      }
    
    }
  }

  @media screen and (max-width: 768px) {
    //display: none;
  }

`

export const Pricipal = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 0px 650px 100%;
  grid-template-areas:
    "cabecalho cabecalho"
    "secao barra-lateral"
    "rodape rodape";

  & .padraoImg {
    @media screen and (max-width: 923px) {
      width: 100%;
      height: 55vh;
      margin-top: -10px;
    }
  }

  & .imgDiv {
    width: 80%;
    height: 75vh;
    border: none;
    margin: auto;
    display: flex;
    margin-top: -15px;

    @media (max-width: 1650px){
      height: 100vh;
      width: 98%;
      margin-top: -40px;
    }

    @media (max-width: 1350px){
      height: 80vh;
    }

    @media (max-width: 1050px){
      height: 70vh;
    }

    @media screen and (max-width: 923px) {
      width: 100%;
      height: 90%;
      border: none;
      margin-top: 10px;
    }
  }

  & header {
    grid-area: cabecalho;
    background-color: transparent;
  }

  & section {
    grid-area: secao;
    background-color: transparent;
    grid-template-rows: 0px 50px 50px;
  }

  & aside {
    grid-area: barra-lateral;
    background-color: transparent;
    
    & h5 {
      font-weight: bold;
    }

    @media (max-width: 1350px){
      & h5 {
        font-size: 1vw;
      }

      & span {
        font-size: 1vw;
      }

      & div {
        & h1 {
          font-size: 2vw;
        }
      }
    }

    @media (max-width: 1050px){
      & h5 {
        font-size: 1vw;
      }

      & span {
        font-size: 1vw;
      }

      & div {
        & h1 {
          font-size: 2vw;
        }
      }
    }

    @media (max-width: 923px){
      & h5 {
        //letter-spacing: 2px;
        font-size: 15px;
        font-weight: bold;
      }

      & span {
        font-size: 15px;
      }

      & div {
        & h1 {
          font-size: 40px;
        }
      }
    }

    .slugImgDiv {
      width: 25%;
      margin: 2px;
      border-radius: 5px;
      border-radius: 5px;
    }

    & .dataCor {
      //border: solid 1px; 
      border-radius: 6px; 
      padding: 0 5px 0 0.5px; 
      background: white; 
      color: #000000;
      margin-left: 1px;
      display: inline-block;
      //text-align: left;
    }

    & .divBorder {
      //width: 200px;
      text-align: left;
      border-radius: 6px; 
      //padding: 0 5px 0 -55px;
      margin-bottom: -15px;
      background: white; 
      color: #000000;
      margin-left: 5px; 
      border: solid 1px;
      display: inline-block;
    }

    .marcaImage {
      border: solid 1px;
      border-color: #00ffff;
      border-radius: 6px;
      border-width: 2px;
      background-color: gray;
    }

    .slugImg {
      width: 40px;
      margin: 2px;
      border-radius: 3px;

      & .positionButtonImg {
      @media (max-width: 923px) {
        border: solid 1px;
      }
    }

      &:hover {
        border: 1px solid;
        border-color: #000000;
        opacity: 0.8;
        border-radius: 5px;
        //box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.582);
        color: #000000;
        font-weight: bold;
        font-size: 0.8rem;
        text-align: center;
        cursor: pointer;
      }
    }
  }

  & span {
    grid-area: barra-lateral;
    background-color: transparent;
  }

  & footer {
    grid-area: rodape;
  }

  & footer {
    margin-top: 40px;
    grid-area: rodape;
    display: flex;
    justify-content: space-evenly;
  }

  & .parte1 {
    width: 100%;
    height: 100%;
    background-color: transparent;
    margin-top: 70px;

    @media(max-width: 923px){
      & .espaco {
        margin-top: 230px;
      }
      & .espaco2 {
        margin-top: 50px;
      }
    }
  }

  .div {
    border: solid 1px;
    border: none;
    width: 45%;
    display: inline-flex;
    margin: 5px;
    
    & b {
      font-size: 30px;
      font-weight: bold;
    }

    @media (max-width: 768px) and (max-width: 932px){
      .divMarge {
        margin-top: 1px;

        & b {
          font-size: 20px;
          font-weight: bold;
        }
      }
    } 

    & .buttonColor {
      margin: 2px;
			display: "inline-block";
			font-size: 11px;
      border: none;
      padding: 5px;
      border-radius: 6px;
			background-color: #08e2d332;
			border: solid 1px;
      border-color: aquamarine;

      &:hover {
        background: #e5d416;
        box-shadow: 0 0 0 0.3px black;
      }
    }

    & .buttonColor1 {
      margin: 2px;
			display: "inline-block";
			font-size: 11px;
      border: none;
      padding: 5px;
      border-radius: 6px;
			background-color: transparent;

      &:hover {
        background: #e5d416;
        box-shadow: 0 0 0 0.3px black;
      }
    }

    & .cartDosesVezes {
      word-break: keep-all;
      font-weight: bold;
      font-size: 18px;
    }

    & .EnvioParaTodoPais {
      word-break: keep-all;
      font-weight: bold;
      font-size: 20px;
     
    }

    //f8f8f8

		& .buttonCompra {
      background-image: linear-gradient(#03EBEB, #001414);
      color: #f0f0f0;
			border: none;
			width: 100%;
			//background: aqua;
			margin: 2px;
			padding: 10px;
			border-radius: 6px;
			font-weight: bold;
      font-size: 20px;
      display: block;
			
			&:hover {
				background: #03CACA;
				box-shadow: 0 0 0 0.3px black;
			}

			@media (max-width: 932px) {
				width: 35%;
        position:fixed;
        bottom: 22px;
        margin-left: 41%;
        font-size: 14px;
        display: none;
			}
		}

    & .buttonCard {
      background-image: linear-gradient(#03EBEB, #001414);
      color: #f7f7f7;
			border: none;
			width: 100%;
			//background: #f0f0f0;
			margin: 2px;
			padding: 10px;
			border-radius: 6px;
			font-weight: bold;
      font-size: 20px;
      display: block;
			
			&:hover {
				background: aqua;
				box-shadow: 0 0 0 1px aqua;
			}

			@media (max-width: 932px) {
				width: 44%;
        position:fixed;
        bottom: 22px;
        margin-left: -3%;
        font-size: 14px;
        background: aqua;
        display: none;
			}
		}

    & .buttonCompraPhone {
      display: none;
			border: none;
			width: 100%;
			background-image: linear-gradient(#03EBEB, #001414);
			margin: 2px;
			padding: 10px;
			font-weight: bold;
      font-size: 20px;
      border-radius: 0 6px;
      color: #f0f0f0;
			
			&:hover {
				background: #03CACA;
				box-shadow: 0 0 0 0.3px black;
			}

			@media (max-width: 932px) {
				width: 35%;
        position:fixed;
        bottom: -3px;
        margin-left: 40%;
        font-size: 15px;
        display: block;
			}
		}

    & .buttonCardPhone {
			background-image: linear-gradient(#03EBEB, #001414);
      display: none;
			border: none;
			width: 100%;
			margin: 2px;
			padding: 10px;
			font-weight: bold;
      font-size: 20px;
      color: #f0f0f0;
			
			&:hover {
				background: aqua;
				box-shadow: 0 0 0 1px aqua;
			}

			@media (max-width: 932px) {
        display: block;
				width: 46%;
        position:fixed;
        bottom: -3px;
        margin-left: -5%;
        font-size: 15px;
        text-align: center;
			}
		}

		& .btnButtonTamanho {
			font-weight: bold;
			margin: 1.5px;
      padding: 3px;
      border-color: aquamarine;
			border-radius: 3px;
      background: #08e2d332;

			&:hover {
				background: #e5d416;
        box-shadow: 0 0 0 0.3px black;
			}
		}

		@media (max-width: 1200px) {
			font-size: 12px;
		}
    
	}

  @media (max-width: 992px) {
    width: 97%;
    text-align: justify;
    grid-template-columns: 100%;
    grid-template-rows: 0px 470px 30px;
    grid-template-areas: "cabecalho" "secao" "barra-lateral" "rodape";   

    & .img {
      width: 100%;
      height: 60vh;
      border: none;
    }

    & aside {
      margin-top: -50px;
      text-align: justify;
      padding: 5px;
      height: 100%;
      grid-area: barra-lateral;
      background-color: transparent;
    }

    & footer {
      //margin: 10px;
      margin-top: 300%;
      display: flex;
      flex-wrap: wrap;
      text-align: center;

      @media (max-width: 923px) {
        margin-top: 220%;
      }
    }

    & .parte1 {
      padding: 5px;
      text-align: justify;
      width: 100%;
      //border: solid 1px;

      @media (max-width: 923px) {
        width: 95%;
        //margin-top: -30px;
      }
    }

    & .div {
      margin-top: 15%;
      border: none;
      width: 97%;
      height: 100%;
      display: inline-block;
      
    }
  }
`;

export const MarginTop = styled.div`
  margin-top: 70px;

  @media (max-width: 992px) {
    margin-top: 0px;
  }
`;

export const ImageMovel = styled.div`
  //position: absolute;
  //margin-top: -90px;
  //border: 0.5px solid;
  border-radius: 8px;
  //display: none;

  img {
    width: 60px;
    height: 80px;
    border-radius: 8px;
  }

  label {
    margin: 3px;
    border-color: gray;
    border: 0.5px solid;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    display: block;
    border-color: gray;

  }

`

export const PositionCard = styled.div`
  display: block;

  @media (max-width: 720px) {
    display: flex;
    position:absolute;
    margin-top: 300px;
    bottom: 46px;
    margin-left: 30%;
    background: red;
    //margin-top: 810px;
  } 
`

export const ButtonsDesc = styled.div`
  //float: right;
  //margin-top: -20px;
  
  div {
    font-weight: 500;

    &:hover {
      cursor: pointer;
    }

    &:nth-child(1) {
      margin-right: 40px;
    }
    b {
      position: absolute;
      margin-left: 14px;
      margin-top: 7px;
      font-size: 11px;
    }
  }

  @media (max-width: 923px){
    width: 40px;
    margin-left: 335px;
    margin-top: 10px;
    //position: absolute;
  }
`;

export const ButtonsBackground = styled.div`
  background-image: linear-gradient(#03EBEB, #001414);
`
export const ButtonsImagesColor = styled.div`
  display: block;

  @media (max-width: 723px) and (max-width: 1200px) {
    display: none;
  }
`

export const Footer2 = styled.div`
  //margin: 10px;
  margin-top: 300%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;

  @media (max-width: 923px) {
    margin-top: 80%;
  }
`

//background-image: linear-gradient(#03EBEB, #001414);