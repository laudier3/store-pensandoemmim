/* eslint-disable no-redeclare */
/* eslint-disable eqeqeq */
import { toast } from "react-toastify";
import React, { useState, useEffect } from "react";
//import LocationOnIcon from "@material-ui/icons/LocationOn";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { addCart, addCor, addTm } from "../../redux/cart/cart";
import { Link, useNavigate } from "react-router-dom";
import { FaCreditCard } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";
import { GoStarFill } from "react-icons/go";
import { Header } from "../header";
import { LoadingPage } from "../products/products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
import { Comentarios } from "./comentarios";
import { Realacionandos } from "./relacionados";
import "react-html5video/dist/styles.css";
import { ImageMovel, MarginTop, Pricipal, PositionCard, ButtonsImagesColor } from "./desc"; //PositionCard
import { ProductImageMini } from "./products_desc";
import Footer from "./footer/footer";
import Cart from "../cart";
import { SlBasket, SlBasketLoaded } from "react-icons/sl";
import { FaCartPlus } from "react-icons/fa";
import { ButtonsDesc } from "./desc";
import { FaArrowLeftLong } from "react-icons/fa6";
//import { P, DefaultPlayer as Video } from "react-html5video";
//import { ProduVideoPlay2 } from "./ReactVideoPlay";
//import { ImageList } from "@material-ui/core";
//import api from "../../api/api";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

setTimeout(() => {
  scrollToTop();
}, 500);

export const DescriptionProducts = () => {
  const [dataSlug, setdataSlug] = useState("");
  const [dataCores, setDatacores] = useState("");
  const [dataTamanho, setTamanho] = useState("");
  const [dataImg5, setDataImm5] = useState("");
  const [categoroy, setCategory] = useState([]);
  const [borders, setBorder] = useState("");
  const [cartIsVisible, setCartIsVisible] = useState(false);

  /*window.addEventListener("click", () => {
    window.history.go(-1);
  })*/

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const length = useSelector((state) => state.cart.cartItems.length);

  const [visitorCount, setVisitorCount] = useState(0);
  const [city, setCity] = useState('');

  const apiKey = '667c1973e05849fa9eb1972746e9f4c1'; // Substitua pela sua chave de API da ipgeolocation.io

  // Função para obter o nome da cidade do visitante baseado no IP
  const getCityByIP = async () => {
    try {
      const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`);
      const data = await response.json();
      setCity(data.city || 'Cidade não encontrada');
    } catch (error) {
      console.error('Erro ao obter cidade por IP', error);
      setCity('Erro ao obter cidade');
    }
  };

  useEffect(() => {
    // Atualiza a contagem de visitantes e a cidade a cada 5 segundos
    const interval = setInterval(() => {
      setVisitorCount(Math.floor(Math.random() * 10000) + 1);
      getCityByIP();  // Obter a cidade do visitante baseado no IP
    }, 5000);

    // Limpeza do intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []);
  
  if (!window.location.hash) {
    window.location = window.location + "#products#description";
    window.location.reload();
  }

  //let url = window.location.pathname;
  //let parts = url.split("/");
  //let lastPart = parts.pop() || parts.pop();
  //const lastPart = localStorage.getItem("id");

  let url = window.location.pathname;
  let parts = url.split("/");
  let lastPart2 = parts.pop() || parts.pop();
  //console.log(lastPart2);

  const navigate = useNavigate();

  const cart = useSelector((cartItems) => cartItems.cart.cartItems.length);
  const product = useSelector((productsSlice) => productsSlice.products.items);
  const productList = [product];

  //const [borderCor, setBordercor] = useState("red")

  const dataProductFilter = productList[0]?.filter(
    (productData) => productData.id === lastPart2
  );

  const priceFilter = dataProductFilter.map((pri) => pri.price);

  const sizeFilter = dataProductFilter.map((pri) => pri.size);
  const divideSizeArrey = { ...sizeFilter[0] };

  const imgFilterImg6 = dataProductFilter.map((img6) => img6.image[5]);

  const ProcessoImageCor = async () => {
    
    const res = "category";
    console.log(res);

    const response = await imgFilterImg6;
    setDataImm5(response);
    setCategory(res);
    //setCategoryData(res);
  };

  localStorage.setItem("tm", divideSizeArrey[0]);
  const recebeTm = localStorage.getItem("tm");

  const dispatch = useDispatch();

  function handlerCartAdd(e) {
    const id = localStorage.getItem("id");

    const dataCor = { id: id, cor: dataSlug };
    const dataTm = {
      id: id,
      tm: recebeTm == "Padrão" ? recebeTm : dataTamanho,
    };
    
    dispatch(addTm(dataTm));
    dispatch(addCor(dataCor));

    if (dataTm.tm == "Padrão") {
      if (cart <= 4) {
        if (dataTm.tm == "") {
          alert("Você tem que escolher um tamanho antes!");
        } else {
          if (dataSlug == "") {
            alert("Você tem que escolher uma cor antes!");
          } else {
            setTimeout(() => {
              dispatch(addCart(e));
              navigate("/cartFinali");
            }, 1000);
            <LoadingPage>
              <ReactLoading
                type="spokes"
                color="aqua"
                height={"100%"}
                width={"100%"}
                delay={"100"}
              />
            </LoadingPage>;
          }
        }
      } else {
        alert("Você so pode adiciona 5 itens no carrio por vez");
      }
    }

    if (dataTm.tm != "Padrão") {
      if (cart <= 4) {
        if (dataTm.tm == "") {
          alert("Você tem que escolher um tamanho antes!");
        } else {
          if (dataSlug == "") {
            alert("Você tem que escolher uma cor antes!");
          } else {
            setTimeout(() => {
              dispatch(addCart(e));
              navigate("/cartFinali");
            }, 1000);
            <LoadingPage>
              <ReactLoading
                type="spokes"
                color="aqua"
                height={"100%"}
                width={"100%"}
                delay={"100"}
              />
            </LoadingPage>;
          }
        }
      } else {
        alert("Você so pode adiciona 5 itens no carrio por vez");
      }
    }
  }

  function handlerCartAdd2(e) {
    let id = localStorage.getItem("id");

    //console.log(e);
    let nameProduct = localStorage.getItem("name");

    const dataCor = { id: id, cor: dataSlug };
    const dataTm = {
      id: id,
      tm: recebeTm == "Padrão" ? recebeTm : dataTamanho,
    };

    dispatch(addTm(dataTm));
    dispatch(addCor(dataCor));

    if (dataTm.tm == "Padrão") {
      if (cart <= 4) {
        if (dataTm.tm == "") {
          alert("Você tem que escolher um tamanho antes!");
        } else {
          if (dataSlug == "") {
            alert("Você tem que escolher uma cor antes!");
          } else {
            dispatch(addCart(e));
            toast.success(
              `O produto ${nameProduct} foi adicionado ao carrinho!`,
              { position: toast.POSITION.TOP_CENTER }
            );

            scrollToTop();
          }
        }
      } else {
        alert("Você so pode adiciona 5 itens no carrio por vez");
      }
    }

    if (dataTm.tm != "Padrão") {
      if (cart <= 4) {
        if (dataTm.tm == "") {
          alert("Você tem que escolher um tamanho antes!");
        } else {
          if (dataSlug == "") {
            alert("Você tem que escolher uma cor antes!");
          } else {
            dispatch(addCart(e));
            toast.success(
              `O produto ${nameProduct} foi adicionado ao carrinho!`,
              { position: toast.POSITION.TOP_CENTER }
            );

            scrollToTop();
            //toast.success(`O produto ${nameProduct}`)
          }
        }
      } else {
        alert("Você so pode adiciona 5 itens no carrio por vez");
      }
    }
  }

  let percentual0 = 0.3;
  let aumento0 = priceFilter * percentual0;
  let novo_price0 = priceFilter - aumento0;

  let percentual = 0.25;
  let aumento = priceFilter * percentual;
  let novo_price = priceFilter - aumento;

  let percentual2 = 0.17;
  let aumento2 = priceFilter * percentual2;
  let novo_price2 = priceFilter - aumento2;

  let percentual3 = 0.13;
  let aumento3 = priceFilter * percentual3;
  let novo_price3 = priceFilter - aumento3;

  //imagem de meio de pagamentos bandeiras
  const imgCart = [
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/aura@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/elo@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/hipercard@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/payment-method-types/pix@2x.png",
    },
    {
      img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/discover@2x.png",
    },
    { img: "img_outras/horizontal_logo.png" },
  ];

  const Example = () => (
    /*
    blank
    balls
    bars
    bubbles
    cubes
    cylon
    spin
    spinningBubbles
    spokes 
    */
    <LoadingPage>
      <ReactLoading
        type="spokes"
        color="aqua"
        height={"100%"}
        width={"100%"}
        delay={"100"}
      />
    </LoadingPage>
  );

  //const frete = {
  //  frete: "FRETE GRATIS PARA DODO O BRASIL",
  //};

  const priceAtual =
    dataTamanho == "64GB"
      ? novo_price0
      : dataTamanho == "128GB"
      ? novo_price
      : dataTamanho == "256GB"
      ? novo_price2
      : dataTamanho == "512GB"
      ? novo_price3
      : novo_price;
  //console.log(priceAtual);

  const productProntoAddCard = [
    {
      id: dataProductFilter[0]?.id,
      name: dataProductFilter[0]?.name,
      price: priceAtual,
      quantity: dataProductFilter[0]?.quantity,
      url_product: dataProductFilter[0]?.url_product,
      description: dataProductFilter[0]?.description,
      category: categoroy,
      cor: dataCores,
      image: dataSlug,
      size: dataTamanho,
    },
  ];

  //console.log(productProntoAddCard, " t");

  /*const semImagem =
    "https://dermogral.com.br/wp-content/uploads/2023/03/FARMACIA-DERMOGRAL-SEM-FOTO.png";*/

  return (
    <>
      <Header />
      <MarginTop />
      <Pricipal>
        <section>
          {dataProductFilter == "" ? (
            <Example />
          ) : (
            dataProductFilter.map((res) => {
              const { id, image } = res;

              //console.log(slug, "11111");

              const imgList = [
                image[0],
                image[1],
                image[2],
                image[3],
                image[4],
                image[5],
                image[6],
              ];

              //const mostra = image[5] == undefined ? "none" : "initial"

              //console.log(mostra)

              function over0() {
                document.getElementById("logo").src = `${image[0] || image[1]}`;
              }
              function over1() {
                document.getElementById("logo").src = `${image[1] || image[4]}`;
              }
              function over2() {
                document.getElementById("logo").src = `${image[2] || image[1]}`;
              }

              function over3() {
                document.getElementById("logo").src = `${image[3] || image[0]}`;
              }

              function over4() {
                document.getElementById("logo").src = `${image[4] || image[1]}`;
              }

              return (
                <div>
                  <ProductImageMini>
                    <div className="imgMini">
                      <div className="imgMini">
                        <img
                          src={image[0] || image[1]}
                          alt="img0"
                          onMouseOver={() => over0(over0)}
                        />
                      </div>
                      <div className="imgMini">
                        <img
                          src={image[1] || image[0]}
                          alt="img0"
                          onMouseOver={() => over1(over1)}
                        />
                      </div>
                      <div className="imgMini">
                        <img
                          src={image[2] || image[0]}
                          alt="img0"
                          onMouseOver={() => over2(over2)}
                        />
                      </div>
                      <div className="imgMini">
                        <img
                          src={image[3] || image[2]}
                          alt="img0"
                          onMouseOver={() => over3(over3)}
                        />
                      </div>
                      <div className="imgMini">
                        <img
                          src={image[4] || image[1]}
                          alt="img0"
                          onMouseOver={() => over4(over4)}
                        />
                      </div>
                    </div>
                  </ProductImageMini>
                  
                  <Swiper
                    className="padraoImg"
                    grabCursor={true}
                    effect={"creative"}
                    creativeEffect={{
                      prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                      },
                      next: {
                        translate: ["100%", 0, 0],
                      },
                    }}
                    modules={[EffectCreative]}
                  >
                    {imgList.map((imgData) =>
                      imgData == "" ? (
                        ""
                      ) : (
                        <SwiperSlide key={id}>
                          
                          <PositionCard>
                            <Link to="/cartFinali">
                              <ButtonsDesc>
                              <Link to="/">
                                <FaArrowLeftLong style={{
                                  position: "absolute", 
                                  marginTop: 10,
                                  fontSize: 25,
                                  marginLeft: "-330px",
                                  color: "#000000",
                                }} />
                              </Link>
                                <div onClick={handleCartClick}>
                                  {length === 0 ? "" : <b style={{
                                    fontSize: 16, 
                                    borderRadius: 50,
                                    height: 18,
                                    width: 16,
                                    textAlign: "center",
                                    marginTop: 9,
                                    marginLeft: 14,
                                    fontWeight: "bold",
                                    color: "#000000",
                                  }}>{length}</b>}
                                  {length > 0 ? (
                                    <SlBasketLoaded style={{ color: "#000000", fontSize: 40, marginLeft: "-2px" }} />
                                  ) : (
                                    <SlBasket style={{ color: "#000000", fontSize: 40 }} />
                                  )}
                                </div>
                              </ButtonsDesc>
                              </Link>
                            <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
                          </PositionCard>
                          
                          <img
                            src={dataSlug ? dataSlug : imgData}
                            id="logo"
                            alt=""
                            className="imgDiv"
                          />
                        </SwiperSlide>
                      )
                    )}
                    
                  </Swiper>
                  
                </div>
              );
            })
          )}
        </section>
        
        <aside>
          {dataProductFilter == "" ? (
            <Example />
          ) : (
            dataProductFilter.map((res) => {
              const { name, quantity, color, slug, frete } = res; //image para videos

              return (
                <>
                  <div className="div">
                    {/*<ProduVideoPlay2>
                      {image[5] == "" ? (
                        ""
                      ) : (
                        <Video style={{ width: 350, height: 230 }}>
                          <source src={image[5]} type="video/webm" />
                        </Video>
                      )}
                    </ProduVideoPlay2>*/}
                    <ImageMovel>
                      {slug[0]?.charAt() == "h" ? (
                              
                        <label className={dataSlug === res.slug[0] ? borders : ""}>
                          <img
                            onClick={() =>
                              setdataSlug(res.slug[0]) ||
                              setDatacores(res.color[0]) ||
                              setBorder("marcaImage") ||
                              ProcessoImageCor
                            }
                            
                            src={res.slug[0]}
                            alt="img slug"
                          />
                        </label>
                        
                      ) : (
                        <button
                          type="button"
                          className="buttonColor1"
                          onClick={() =>
                            ProcessoImageCor || setdataSlug(color[0])
                          }
                        >
                          {color[0] ? color[0] : ""}
                        </button>
                      )}
                      {slug[1]?.charAt() == "h" ? (
                        <label className={dataSlug === res.slug[1] ? borders : ""}>
                          <img
                            onClick={() =>
                              setdataSlug(res.slug[1]) ||
                              setDatacores(res.color[1]) ||
                              ProcessoImageCor
                            }
                            
                            src={res.slug[1]}
                            alt="img slug"
                            srcset=""
                          />
                        </label>
                      ) : (
                        <button
                          type="button"
                          className="buttonColor1"
                          onClick={() =>
                            ProcessoImageCor || setdataSlug(color[1])
                          }
                        >
                          {color[1] ? color[1] : ""}
                        </button>
                      )}
                      {slug[2]?.charAt() == "h" ? (
                          <label className={dataSlug === res.slug[2] ? borders : ""}>
                          <img
                            onClick={() =>
                              setdataSlug(res.slug[2]) ||
                              setDatacores(res.color[2]) ||
                              ProcessoImageCor
                            }
                            
                            src={res.slug[2]}
                            alt="img slug"
                            srcset=""
                          />
                        </label>
                      ) : (
                        <button
                          type="button"
                          className="buttonColor1"
                          onClick={() =>
                            ProcessoImageCor || setdataSlug(color[2])
                          }
                        >
                          {color[2] ? color[2] : ""}
                        </button>
                      )}
                      {slug[3]?.charAt() == "h" ? (
                          <label className={dataSlug === res.slug[3] ? borders : ""}>
                          <img
                            onClick={() =>
                              setdataSlug(res.slug[3]) ||
                              setDatacores(res.color[3]) ||
                              ProcessoImageCor
                            }
                            
                            src={res.slug[3]}
                            alt="img slug"
                            srcset=""
                          />
                        </label>
                      ) : (
                        <button
                          type="button"
                          className="buttonColor1"
                          onClick={() =>
                            ProcessoImageCor || setdataSlug(color[3])
                          }
                        >
                          {color[3] ? color[3] : ""}
                        </button>
                      )}
                      {slug[4]?.charAt() == "h" ? (
                          <label className={dataSlug === res.slug[4] ? borders : ""}>
                          <img
                            onClick={() =>
                              setdataSlug(res.slug[4]) ||
                              setDatacores(res.color[4]) ||
                              ProcessoImageCor
                            }
                            
                            src={res.slug[4]}
                            alt="img slug"
                            srcset=""
                          />
                        </label>
                      ) : (
                        <button
                          type="button"
                          className="buttonColor1"
                          onClick={() =>
                            ProcessoImageCor || setdataSlug(color[4])
                          }
                        >
                          {color[4] ? color[4] : ""}
                        </button>
                      )}
                      {slug[5]?.charAt() == "h" ? (
                          <label className={dataSlug === res.slug[5] ? borders : ""}>
                          <img
                            onClick={() =>
                              setdataSlug(res.slug[5]) ||
                              setDatacores(res.color[5]) ||
                              ProcessoImageCor
                            }
                          
                            src={res.slug[5]}
                            alt="img slug"
                            srcset=""
                          />
                        </label>
                      ) : (
                        <button
                          type="button"
                          className="buttonColor1"
                          onClick={() => setdataSlug(color[5])}
                        >
                          {color[5] ? color[5] : ""}
                        </button>
                      )}
                            
                    </ImageMovel>
                    
                    <div className="">
                      
                      <div className="">
                        <h6 className="b">{name}</h6>
                        <br />
                        <br />
                        <div>
                          <span style={{ fontSize: 15 }}>4.8</span>
                          <GoStarFill
                            style={{ fontSize: 15, color: "#ffc107" }}
                          />
                          <GoStarFill
                            style={{ fontSize: 15, color: "#ffc107" }}
                          />
                          <GoStarFill
                            style={{ fontSize: 15, color: "#ffc107" }}
                          />
                          <GoStarFill
                            style={{ fontSize: 15, color: "#ffc107" }}
                          />
                          <TiStarHalfOutline
                            style={{ fontSize: 18, color: "#ffc107" }}
                          />
                          <span> | {quantity * 3} Vendido</span>
                          <p></p>
                          <span>ESSE É UM DOS MAIS VENDIDOS NA LOJA</span>
                        </div>
                        <br />

                        <div>
                          {dataTamanho == "64GB" ? (
                            <h1>R$ {novo_price0},00</h1>
                          ) : dataTamanho == "128GB" ? (
                            <h1>R$ {novo_price},00</h1>
                          ) : dataTamanho == "256GB" ? (
                            <h1>R$ {novo_price2},00</h1>
                          ) : dataTamanho == "512GB" ? (
                            <h1>R$ {novo_price3},00</h1>
                          ) : (
                            <h1>R$ {novo_price},00</h1>
                          )}

                          <span
                            style={{
                              fontWeight: "bold",
                              color: "green",
                              font: 18,
                            }}
                          >
                            Frete {frete}
                          </span>
                        </div>
                        <p style={{ fontSize: 20 }}>
                          <strong style={{ fontSize: 20 }}>
                              Cor 
                              <div className="divBorder">
                                <label className="dataCor">{dataCores == "" ? res.color[0] : ""}
                                </label>
                                <label className={dataCores ? "dataCor" : ""}>
                                {dataCores.toLowerCase()}
                                </label>
                              </div>
                            </strong>
                          <span
                            style={{
                              border: "none",
                              padding: 5,
                              borderRadius: 5,
                            }}
                          >
                            {/*dataSlug ? (
                              <img
                                className="slugImgDiv"
                                src={dataSlug}
                                alt={dataSlug}
                              />
                            ) : (
                              dataSlug
                            )*/}
                          </span>
                        </p>

                        <div>
                          <ButtonsImagesColor
                            role="group"
                            aria-label="Basic example"
                            style={{ width: "80%" }}
                          >
                           
                            {slug[0]?.charAt() == "h" ? (
                              
                              <label className={dataSlug === res.slug[0] ? borders : ""}>
                                <img
                                  onClick={() =>
                                    setdataSlug(res.slug[0]) ||
                                    setDatacores(res.color[0]) ||
                                    setBorder("marcaImage") ||
                                    ProcessoImageCor
                                  }
                                  className="slugImg"
                                  src={res.slug[0]}
                                  alt="img slug"
                                />
                              </label>
                              
                            ) : (
                              <button
                                type="button"
                                className="buttonColor1"
                                onClick={() =>
                                  ProcessoImageCor || setdataSlug(color[0])
                                }
                              >
                                {color[0] ? color[0] : ""}
                              </button>
                            )}
                            {slug[1]?.charAt() == "h" ? (
                              <label className={dataSlug === res.slug[1] ? borders : ""}>
                                <img
                                  onClick={() =>
                                    setdataSlug(res.slug[1]) ||
                                    setDatacores(res.color[1]) ||
                                    ProcessoImageCor
                                  }
                                  className="slugImg"
                                  src={res.slug[1]}
                                  alt="img slug"
                                  srcset=""
                                />
                              </label>
                            ) : (
                              <button
                                type="button"
                                className="buttonColor1"
                                onClick={() =>
                                  ProcessoImageCor || setdataSlug(color[1])
                                }
                              >
                                {color[1] ? color[1] : ""}
                              </button>
                            )}
                            {slug[2]?.charAt() == "h" ? (
                               <label className={dataSlug === res.slug[2] ? borders : ""}>
                                <img
                                  onClick={() =>
                                    setdataSlug(res.slug[2]) ||
                                    setDatacores(res.color[2]) ||
                                    ProcessoImageCor
                                  }
                                  className="slugImg"
                                  src={res.slug[2]}
                                  alt="img slug"
                                  srcset=""
                                />
                              </label>
                            ) : (
                              <button
                                type="button"
                                className="buttonColor1"
                                onClick={() =>
                                  ProcessoImageCor || setdataSlug(color[2])
                                }
                              >
                                {color[2] ? color[2] : ""}
                              </button>
                            )}
                            {slug[3]?.charAt() == "h" ? (
                               <label className={dataSlug === res.slug[3] ? borders : ""}>
                                <img
                                  onClick={() =>
                                    setdataSlug(res.slug[3]) ||
                                    setDatacores(res.color[3]) ||
                                    ProcessoImageCor
                                  }
                                  className="slugImg"
                                  src={res.slug[3]}
                                  alt="img slug"
                                  srcset=""
                                />
                              </label>
                            ) : (
                              <button
                                type="button"
                                className="buttonColor1"
                                onClick={() =>
                                  ProcessoImageCor || setdataSlug(color[3])
                                }
                              >
                                {color[3] ? color[3] : ""}
                              </button>
                            )}
                            {slug[4]?.charAt() == "h" ? (
                               <label className={dataSlug === res.slug[4] ? borders : ""}>
                                <img
                                  onClick={() =>
                                    setdataSlug(res.slug[4]) ||
                                    setDatacores(res.color[4]) ||
                                    ProcessoImageCor
                                  }
                                  className="slugImg"
                                  src={res.slug[4]}
                                  alt="img slug"
                                  srcset=""
                                />
                              </label>
                            ) : (
                              <button
                                type="button"
                                className="buttonColor1"
                                onClick={() =>
                                  ProcessoImageCor || setdataSlug(color[4])
                                }
                              >
                                {color[4] ? color[4] : ""}
                              </button>
                            )}
                            {slug[5]?.charAt() == "h" ? (
                               <label className={dataSlug === res.slug[5] ? borders : ""}>
                                <img
                                  onClick={() =>
                                    setdataSlug(res.slug[5]) ||
                                    setDatacores(res.color[5]) ||
                                    ProcessoImageCor
                                  }
                                  className="slugImg"
                                  src={res.slug[5]}
                                  alt="img slug"
                                  srcset=""
                                />
                              </label>
                            ) : (
                              <button
                                type="button"
                                className="buttonColor1"
                                onClick={() => setdataSlug(color[5])}
                              >
                                {color[5] ? color[5] : ""}
                              </button>
                            )}
                            
                          </ButtonsImagesColor>
                        </div>
                        <div>
                          {divideSizeArrey[0] == "Padrão" ||
                          divideSizeArrey[0] == "padrao" ||
                          divideSizeArrey[0] == "PADRÃO" ||
                          divideSizeArrey[0] == "Padrao" ||
                          divideSizeArrey[0] == "Ùnico" ||
                          divideSizeArrey[0] == "padrão" ||
                          divideSizeArrey[0] == "único" ||
                          divideSizeArrey[0] == "unico" ||
                          divideSizeArrey[0] == "Unico" ? (
                            ""
                          ) : (
                            <div>
                              <br />
                              <p>
                                <strong style={{ fontSize: 20 }}>
                                  Tamanho{" "}
                                </strong>
                                <span
                                  style={{
                                    border: "solid 1px",
                                    padding: 5,
                                    borderRadius: 5,
                                  }}
                                >
                                  {dataTamanho
                                    ? dataTamanho
                                    : divideSizeArrey[0]}
                                </span>
                              </p>
                              {divideSizeArrey[0] ? (
                                <button
                                  className="btnButtonTamanho"
                                  onClick={() => setTamanho(divideSizeArrey[0])}
                                >
                                  {divideSizeArrey[0]}
                                </button>
                              ) : (
                                ""
                              )}
                              {divideSizeArrey[1] ? (
                                <button
                                  className="btnButtonTamanho"
                                  onClick={() => setTamanho(divideSizeArrey[1])}
                                >
                                  {divideSizeArrey[1]}
                                </button>
                              ) : (
                                ""
                              )}
                              {divideSizeArrey[2] ? (
                                <button
                                  className="btnButtonTamanho"
                                  onClick={() => setTamanho(divideSizeArrey[2])}
                                >
                                  {divideSizeArrey[2]}
                                </button>
                              ) : (
                                ""
                              )}
                              {divideSizeArrey[3] ? (
                                <button
                                  className="btnButtonTamanho"
                                  onClick={() => setTamanho(divideSizeArrey[3])}
                                >
                                  {divideSizeArrey[3]}
                                </button>
                              ) : (
                                ""
                              )}
                              {divideSizeArrey[4] ? (
                                <button
                                  className="btnButtonTamanho"
                                  onClick={() => setTamanho(divideSizeArrey[4])}
                                >
                                  {divideSizeArrey[4]}
                                </button>
                              ) : (
                                ""
                              )}
                              {divideSizeArrey[5] ? (
                                <button
                                  className="btnButtonTamanho"
                                  onClick={() => setTamanho(divideSizeArrey[5])}
                                >
                                  {divideSizeArrey[5]}
                                </button>
                              ) : (
                                ""
                              )}
                              {divideSizeArrey[6] ? (
                                <button
                                  className="btnButtonTamanho"
                                  onClick={() => setTamanho(divideSizeArrey[6])}
                                >
                                  {divideSizeArrey[6]}
                                </button>
                              ) : (
                                ""
                              )}
                              {divideSizeArrey[7] ? (
                                <button
                                  className="btnButtonTamanho"
                                  onClick={() => setTamanho(divideSizeArrey[7])}
                                >
                                  {divideSizeArrey[7]}
                                </button>
                              ) : (
                                ""
                              )}
                              {divideSizeArrey[8] ? (
                                <button
                                  className="btnButtonTamanho"
                                  onClick={() => setTamanho(divideSizeArrey[8])}
                                >
                                  {divideSizeArrey[8]}
                                </button>
                              ) : (
                                ""
                              )}
                              {divideSizeArrey[9] ? (
                                <button
                                  className="btnButtonTamanho"
                                  onClick={() => setTamanho(divideSizeArrey[9])}
                                >
                                  {divideSizeArrey[9]}
                                </button>
                              ) : (
                                ""
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <br />
                      
                      <div style={
                        { padding: '20px', 
                        textAlign: 'center', 
                        backgroundColor: '#f8f8f8', 
                        borderRadius: '8px', 
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        color: "green",
                        fontWeight: "bold" 
                        }}>
                        
                        <p><strong style={{color: "#000000"}}>{visitorCount} pessoas em {city}</strong> estão visualizando esse conteúdo agora.</p>

                        {/*<div style={{ marginTop: '20px' }}>
                          <p><strong>Cidade:</strong> {city}</p>
                        </div>*/}
                      </div>
                     
                    </div>
                  </div>
                  <div className="div">
                    <div>
                      <div>
                        <strong className="EnvioParaTodoPais">
                          Envio para todo o país
                        </strong>
                        <br />
                        <span>
                          Saiba os prazos de entrega e as formas de envio.
                        </span>
                        <div>
                          <p>
                            <strong className="EnvioParaTodoPais">
                              Disponivel em Estoque
                            </strong>
                            <div className="EnvioParaTodoPais">
                              disponivel ({quantity})
                            </div>
                          </p>
                        </div>

                        <button
                          onClick={() =>
                            handlerCartAdd(productProntoAddCard[0])
                          }
                          className="buttonCompra"
                        >
                          Comprar agora
                        </button>

                        <button
                          onClick={() =>
                            handlerCartAdd2(productProntoAddCard[0])
                          }
                          className="buttonCard"
                        >
                          Adicionar ao carrinho
                        </button>
                        {/* Botão para modo celular*/}
                        <button
                          onClick={() =>
                            handlerCartAdd(productProntoAddCard[0])
                          }
                          className="buttonCompraPhone"
                        >
                          Comprar agora
                        </button>
                        <button
                          onClick={() =>
                            handlerCartAdd2(productProntoAddCard[0])
                          }
                          className="buttonCardPhone"
                        >
                          Adicionar <FaCartPlus style={{ fontSize: 20, marginLeft: 5 }} />
                        </button>
                        
                        <br />
                        <div>
                          <br />
                          <p>
                            <SwapHorizIcon />{" "}
                            <stron className="EnvioParaTodoPais" g>
                              Devolução Gratis
                            </stron>{" "}
                            <br />
                            <span>
                              Você tem 7 dias a partir da data de recebimento.
                            </span>
                          </p>
                        </div>
                        
                        <div>
                          <p>
                            <VerifiedUserIcon />{" "}
                            <strong className="EnvioParaTodoPais">
                              Compra Garantida
                            </strong>{" "}
                            <br />
                            <span>
                              Receba o produto que está esperando ou devolvemos
                              o dinheiro.
                            </span>
                            <br />
                            <span className="cartDosesVezes">
                              <FaCreditCard /> Em até 12x sem juros
                              <br />
                              {imgCart.map((imgCard) => (
                                <img
                                  src={imgCard.img}
                                  alt="img"
                                  style={{
                                    width: "12%",
                                    height: 25,
                                    display: "inline-block",
                                    margin: "5PX",
                                    border: "solid 1px",
                                  }}
                                />
                              ))}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </aside>
        {/*<PositionCard>
          <Buttons>
            <div onClick={handleCartClick}>
              {length === 0 ? "" : <b className="bg">{length}</b>}
              {length > 0 ? (
                <SlBasketLoaded style={{ fontSize: 35, marginLeft: "-2px" }} />
              ) : (
                <SlBasket style={{ fontSize: 35 }} />
              )}
            </div>
          </Buttons>
          <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
        </PositionCard>*/}
        <footer>
          {dataProductFilter == "" ? (
            <Example />
          ) : (
            dataProductFilter.map((res) => {
              const { description, image } = res;

              return (
                <>
                  <div className="parte1">
                    <div>
                      {dataImg5 ? (
                        <div className="espaco"></div>
                      ) : (
                        <div className="espaco2"></div>
                      )}
                    </div>
                    {image[5] == "" ? (
                      ""
                    ) : (
                      <p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                      </p>
                    )}

                    {dataSlug == "" ? (
                      ""
                    ) : (
                      <p>
                        <br />
                        <br />
                      </p>
                    )}
                    <h4>
                      <strong>DESCRIÇÃO</strong>
                    </h4>
                    <p>{description}</p>
                  </div>
                </>
              );
            })
          )}
          <></>
        </footer>
      </Pricipal>
      <Realacionandos />
      <Comentarios />
      <Footer />
    </>
  );
};
