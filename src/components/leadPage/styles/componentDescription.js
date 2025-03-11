import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  background: #ffffff;
  border-radius: 8px;

  & .iconhome {
    position: absolute;
  }
`;

export const ProductWrapperts = styled.div`
  width: 100%;
`

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  border-color: #828282;
  border-radius: 6px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: #828282;
  //border: solid 1px;
  
  & img {
    max-width: 100%;
    border-radius: 10px;
  }

  & p {
    //border: solid 1px;
    width: 90%;
    margin-left: 20px;
    text-align: justify;

    @media (max-width: 720px) and (max-width: 1200px) {
      width: 85%;
    }
  }

  & strong {
    //border: solid 1px;
    margin-left: 20px;

    @media (max-width: 720px) and (max-width: 1200px) {}
  }

  @media (max-width: 720px) and (max-width: 1200px) {
    margin-top: -25px;
    max-width: 500px;
    width: 400px;
    border: none;
  }
  
`;

export const EspacoTop = styled.div`
  display: none;

  @media (max-width: 720px) and (max-width: 1200px) {
    //border: solid 1px;
    width: 100%;
    height: 60px;
    margin-top: 0px;
    margin-bottom: -5px;
    display: flex;
    position: fixed;
    margin: auto;
    background-image: linear-gradient(#03EBEB, #001414);
    //background:rgba(38, 46, 49, 0.4);
  }
 
`

export const InfoSection = styled.div`
  max-width: 30%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: solid 0.5px;
  border-radius: 8px;
  border-color:rgba(130, 130, 130, 0.45);
  padding: 5px;

  @media (max-width: 720px) and (max-width: 1200px) {
    max-width: 100%;
    width: 100%;
    border: none;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;

  @media (max-width: 720px) and (max-width: 1200px) {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const Price = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #000000;
  display: inline-block;

  & span {
    display: inline-block;
    color: #007600;
    font-size: 22px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: #333;

  & .imgCor {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    border: solid 1px;
  }

  .slugImgDiv {
    width: 25%;
    margin: 2px;
    border-radius: 5px;
    border-radius: 5px;
  }

  & .dataCor { 
    border-radius: 6px; 
    padding: 0 5px 0 0.5px; 
    background: white; 
    color: #000000;
    margin-left: 1px;
  }

  & .divBorder {
    text-align: left;
    border-radius: 6px;
    margin-bottom: -15px;
    background: white; 
    color: #000000;
    margin-left: 5px; 
    display: inline-block;
    margin-top: 5px;
  }

  .marcaImageColor {
    border: solid 1px;
    border-color: #00ffff;
    border-radius: 6px;
    border-width: 2px;
    //width: 50px;
    height: 60px;
  }

  .marcaTamanho {
    border: solid 1px;
    border-color: #00ffff;
    border-radius: 6px;
    border-width: 2px;
    //width: 50px;
    height: 40px;
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
    
  & .buttonCompra {
      background-image: linear-gradient(#03EBEB, #001414);
      color: #f0f0f0;
			border: none;
			width: 94%;
			//background: aqua;
			margin: 2px;
			padding: 10px;
			border-radius: 6px;
			font-weight: bold;
      font-size: 20px;
      display: block;
      margin-top: 30px;
			
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
			width: 94%;
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
			//width: 100%;
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
				width: 50%;
        position:fixed;
        bottom: -3px;
        margin-left: 40%;
        font-size: 20px;
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
				width: 50%;
        position:fixed;
        bottom: -3px;
        margin-left: -10%;
        font-size: 20px;
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
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #ffcc00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  
  &:hover {
    background-color: #ffb700;
  }
`;

export const ProductDetails = styled.div`
  margin-top: 30px;
  width: 100%;
  max-width: 100%;
  text-align: left;
  border: solid 1px;
  border-radius: 8px;
  
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
`;

export const RelationsProducts = styled.div`
  //border: solid 1px;

  @media (max-width: 720px) and (max-width: 1200px) {
    margin-top: 30px;
    width: 90%;
    //display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    //border: 1px solid red
  }

  & .divRelation {
    width: 30%;
    border: solid 1px;
    margin: 5px;
    display: inline-block;
    border-radius: 6px;
    padding: 5px;
    border-color:rgba(130, 130, 130, 0.45);
    box-shadow: 0 0 0 0.5px rgba(130, 130, 130, 0.45);

    & .imgRelation {
      width: 200px;
      height: 220px;

      @media (max-width: 720px) and (max-width: 1200px) {
        width: 100%;
        height: 90px;
      }  
    }

    & .h5Relation {
      margin-top: 15px;
      color: #000000;
      font-size: 1rem;
      overflow: hidden; // Removendo barra de rolagem
      text-overflow: ellipsis; // Adicionando "..." ao final
      display: -webkit-box;
      -webkit-line-clamp: 2; // Quantidade de linhas
      -webkit-box-orient: vertical; 

      @media (max-width: 720px) and (max-width: 1200px) {
        font-size: 0.8rem;
      }   
    }

    & .oldPrice {
      font-size: 0.9rem;
      text-decoration: line-through;
      flex-grow: 1;
      color: gray;
      opacity: 1;

      @media (max-width: 720px) and (max-width: 1200px) {
        font-size: 0.5rem;
      }    
    }

    & .frete {
      font-size: 1rem;
      color: #00A650;

      @media (max-width: 720px) and (max-width: 1200px) {
        font-size: 0.5rem;
      }
    }

    & .cartImg {
      width: 33px;

      @media (max-width: 720px) and (max-width: 1200px) {
        width: 20px;
      }      
    }

    & .pRelation {
      font-size: 10px;
    }

    & .cartao {
      font-size: 10px;
    }

    & .oldPricereal {
      font-size: 1.5rem;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      flex-grow: 1;
      font-weight: bold;
      color: #000000;
      opacity: 0.7;

      @media (max-width: 720px) and (max-width: 1200px) {
       font-size: 1rem;
      }    
    }
  }

  & .divRelationLateral {
    width: 97%;
    border: solid 1px;
    margin: 5px;
    display: inline-block;
    border-radius: 6px;
    padding: 5px;
    border-color:rgba(130, 130, 130, 0.45);
    box-shadow: 0 0 0 0.5px rgba(130, 130, 130, 0.45);

    & .h5Relation {
      margin-top: 15px;
      color: #000000;
      font-size: 1rem;
      overflow: hidden; // Removendo barra de rolagem
      text-overflow: ellipsis; // Adicionando "..." ao final
      display: -webkit-box;
      -webkit-line-clamp: 2; // Quantidade de linhas
      -webkit-box-orient: vertical; 
    }

    & .imgRelation {
      width: 100%;
    }

    & .oldPrice {
      font-size: 0.9rem;
      text-decoration: line-through;
      flex-grow: 1;
      color: gray;
      opacity: 1;

      @media (max-width: 720px) and (max-width: 1200px) {
        font-size: 0.5rem;
      }    
    }

    & .frete {
      font-size: 1rem;
      color: #00A650;

      @media (max-width: 720px) and (max-width: 1200px) {
        font-size: 0.5rem;
      }
    }

    & .cartImg {
      width: 33px;

      @media (max-width: 720px) and (max-width: 1200px) {
        width: 20px;
      }      
    }

    & .pRelation {
      font-size: 10px;
    }

    & .cartao {
      font-size: 10px;
    }

    & .oldPricereal {
      font-size: 1.5rem;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      flex-grow: 1;
      font-weight: bold;
      color: #000000;
      opacity: 0.7;

      @media (max-width: 720px) and (max-width: 1200px) {
       font-size: 1rem;
      }    
    }
  }
`

 // Estilos do SliderContainer
 export  const SliderContainer = styled.div`
    margin-top: -105px;
    width: 100%;
    max-width: 85%;
    //margin: 0 auto;
    overflow: hidden;
    position: relative;
    margin-left: 140px;
    border: solid 1px;

      //Variaveis de tamnahos
    --tamanho1: 555px;
    --tamanho2: 250px;
    --tamanho3: 200px;
    --tamanho4: 150px;
    --tamanho5: 350px;
    --tamanho6: 182px;
    --tamanho7: 280px;
    --tamanho8: 360px;
    --tamanho9: 310px;

    @media (max-width: 768px) and (max-width: 1200px)  {
      width: var(--tamanho8);
    }
  `;
  
  // Estilos do Slide (as imagens)
 export  const Slide = styled.div`
    display: flex;
    transition: transform 0.5s ease;
  `;
  
  // Estilo da imagem
 export  const Image = styled.img`
    width: 800px;
    height: 70vh;
  `;

