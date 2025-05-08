/* eslint-disable no-redeclare */
/* eslint-disable eqeqeq */
import { toast } from "react-toastify";
import React, { useState } from "react";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { addCart, addCor, addTm } from "../../redux/cart/cart";
import { useNavigate } from "react-router-dom";
import { FaCreditCard } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";
import { GoStarFill } from "react-icons/go";
import { HeaderDesc } from "../header/indexDesc";
import { LoadingPage } from "../products/products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
import { Realacionandos } from "./relacionados";
import "react-html5video/dist/styles.css";
import { ProductImageMini2, ImageProducts } from "./desc"; //PositionCard
import Footer from "../footer/footer";
import { FaCartPlus } from "react-icons/fa";
import { Container, Description, ImageSection, InfoSection, Price, ProductDetails, ProductWrapper, RelationsProducts, Title } from "../leadPage/styles/componentDescription";
import imgcart2 from "./images/card.jpg";
import * as JivoSite from "react-jivosite";
import { useEffect } from "react";
import { ProduVideoPlay } from './ReactVideoPlay'
import { DefaultPlayer  as Video } from "react-html5video"
import { Comentarios } from "./comentariosVPS";
//import Base64UrlWithName from "./teste/personalibse";
//import { UpdateImage } from "./upload";
//import "react-html5video/dist/styles.css"
//import LocationOnIcon from "@material-ui/icons/LocationOn";
//import ReactImageZoom from 'react-image-zoom';
//import Cart from "../cart";
//import { SlBasket, SlBasketLoaded } from "react-icons/sl";
//import { ButtonsDesc } from "./desc";
//import { FaArrowLeftLong } from "react-icons/fa6";
//import { FaArrowAltCircleLeft } from "react-icons/fa";

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
  const [bordersTamnho, setBorderTamnho] = useState("");
  //const [ setCartIsVisible] = useState(false);

  //lastIndexOf() ou substr()
  //let text = "https://pensandoemmim.com"
  //let result = text.lastIndexOf("mp4");
  //console.info(result === -1 ? "É" : result)

 /*window.addEventListener("click", () => {
    window.location.reload()
  })*/

  //window.history.go(1);
  //const ts = window.history.length
  //console.info(ts)//
//
  //if(ts == 50){
  //  Navigate("/")+
  //}

  /*const handleCartClick = () => {
    setCartIsVisible(true);
  };*/

  //const length = useSelector((state) => state.cart.cartItems.length);

  /*const [visitorCount, setVisitorCount] = useState(0);
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
  };*/


  //if (!window.location.hash) {
  //  window.location = window.location + "#products#description";
  //  window.location.reload();
  //}

  //let url = window.location.pathname;
  //let parts = url.split("/");
  //let lastPart = parts.pop() || parts.pop();
  //const lastPart = localStorage.getItem("id");

  let url = window.location.pathname;
  let parts = url.split("/");
  let lastPart2 = parts.pop() || parts.pop();
  //console.log(lastPart2);

  window.history.pushState({}, "", `/desc/${lastPart2}`);

  useEffect(() => {
    const handlePopState = () => {
      return window.history.back() || window.location.reload()
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigate = useNavigate();

  const cart = useSelector((cartItems) => cartItems.cart.cartItems.length);
  const product = useSelector((productsSlice) => productsSlice.products.items);
  const productList = [product];
  const filterProducts1 = product.filter(resp => resp.id === "286a8b7b-9524-4f26-801b-e2d470496664")
  const filterProducts2 = product.filter(resp => resp.id === "6ce49530-1272-45cb-b957-40e830100ad1")
  const filterProducts3 = product.filter(resp => resp.id === "bf5152b4-5315-449a-925d-ad03094186cb")

  const filterProduct = product.map((pro) => pro);
  const filterListProducters = [filterProduct];
  const dataProductFilter2 = filterListProducters[0]?.filter(
    (productData) => productData.id === lastPart2
  );

  const filterListProducts = [filterProduct];

  const filterProductBarcode = dataProductFilter2.map((pro) => pro.bar_code);
  const dataProductFilterBarcodeList = filterListProducts[0]?.filter(
    (productData) => productData.bar_code == filterProductBarcode[0]
  );

  const contItems = dataProductFilterBarcodeList.length;

  //console.log(contItems)
  //console.log(filterProducts1[0].image[0])

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
    //console.log(res);

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

  const CarregandoPagina = () => (
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

  /*<script src="//code.jivosite.com/widget/OArtCYonnR" async=""></script>*/

  return (
    <>
      <HeaderDesc />
      {dataProductFilter[0]?.id ?
      <div>
        <JivoSite.Widget id="OArtCYonnR" />
        {/*<Base64UrlWithName/>*/}
        <Container>
          <ProductWrapper>
            <ImageSection>
              <ImageProducts>
                {/*<img id="logo" src={imgs[0]} alt="img"/>*/}
                {dataProductFilter == "" ? <CarregandoPagina /> : 
                  dataProductFilter.map((res) => {
                    const { id, image } = res;

                    //const props = {width: 700, height: 350, zoomWidth: 2000, img: image[0]}

                    const imgList = [
                      image[0],
                      image[1],
                      image[2],
                      image[3],
                      image[4],
                      image[5],
                    ];
                  
                    return (
                      <>
                      {/*<ReactImageZoom {...props} />*/}
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
                        {imgList.map((resImg) => (
                        <SwiperSlide key={id}>
                          <img
                            src={dataSlug ? dataSlug : resImg}
                            id="logo"
                            alt="img"
                            className="imgDiv"
                          />
                        </SwiperSlide>
                          
                        ))}
                      </Swiper>
                      </>
                    )
                })}
              </ImageProducts>
              <>
              {dataProductFilter == "" ? (
                <CarregandoPagina />
              ) : (
                dataProductFilter.map((res) => {
                  const { image } = res;

                  function over0() {
                    document.getElementById("logo").src = `${image[0] || image[1]}`;
                  }
                  function over1() {
                    document.getElementById("logo").src = `${image[1] || image[2]}`;
                  }
                  function over2() {
                    document.getElementById("logo").src = `${image[2] || image[3]}`;
                  }

                  function over3() {
                    document.getElementById("logo").src = `${image[3] || image[4]}`;
                  }

                  function over4() {
                    document.getElementById("logo").src = `${image[4] || image[5]}`;
                  }

                  return (
                    <div>
                      <ProductImageMini2>
                        <div className="imgMini">
                        {image[0] ? 
                          <div className="imgMini">
                            <img
                              src={image[0] || image[1]}
                              alt="img0"
                              onMouseOver={() => over0(over0)}
                            /> 
                          </div> : ""
                          }
                          {image[1] ? 
                          <div className="imgMini">
                            <img
                              src={image[1] || image[0]}
                              alt="img0"
                              onMouseOver={() => over1(over1)}
                            />
                          </div> : ""
                          }
                          {image[2] ? 
                          <div className="imgMini">
                            <img
                              src={image[2] || image[0]}
                              alt="img0"
                              onMouseOver={() => over2(over2)}
                            />
                          </div> : ""
                          }
                          {image[3] ? 
                          <div className="imgMini">
                            <img
                              src={image[3] || image[2]}
                              alt="img0"
                              onMouseOver={() => over3(over3)}
                            />
                          </div> : ""
                          }
                          {image[4] ? 
                          <div className="imgMini">
                            <img
                              src={image[4] || image[1]}
                              alt="img0"
                              onMouseOver={() => over4(over4)}
                            />
                          </div> : ""
                          }
                          {/*
                            image[5] ? 
                            <div className="imgMini">
                              <ProduVideoPlay>
                                <Video>
                                  <source src={image[5]} type='video/webm'/>
                                </Video>
                              </ProduVideoPlay>
                            </div> : ""
                          */}
                        </div>
                      </ProductImageMini2>
                      
                    </div>
                  );
                })
              )}
            </>
            </ImageSection>
            <InfoSection>
            { dataProductFilter.map((res) => {
                const { name, quantity, color, slug, frete} = res; //image para videos

                return (
                  <>
                    <Title>{name}</Title>
                    <Price>
                    <span style={{ fontSize: 20, color: "#000000" }}>4.8</span>
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
                      <span> | {quantity * 3} Vendido</span><br />
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

                      <span>
                        Frete {frete || "Gratis"}
                      </span>
                    </Price>
                    <div>
                      <span>ESSE É UM DOS MAIS VENDIDOS NA LOJA</span>
                    </div>
                    <Description>
                      Disponivel: {quantity}/un
                      
                      <p style={{ fontSize: 20 }}>
                        <strong style={{ fontSize: 20, display: "inline-block" }}>
                          <div className="divBorder">
                            Cor:
                            <label className={dataCores ? "dataCor" : ""} 
                              style={{
                                border: "solid 1px",
                                borderColor: "#9f8f8f",
                                color: "#474040",
                                fontWeight: "lighter",
                                textAlign: "center",
                                padding: 3,
                                borderRadius: 6
                              }}>
                              {dataCores == "" ? res.color[0] : dataCores.toLowerCase()}
                            </label>
                          </div>
                          <br />
                          <>
                            {slug[0]?.charAt() == "h" ? (
                                    
                              <label className={dataSlug === res.slug[0] ? borders : ""} style={{marginTop: 10}}>
                                <img
                                  style={{borderRadius: 8, width: 50, height: 50, border: "solid 1px", margin: 3}}
                                  className={dataSlug === res.slug[0] ? borders : ""}
                                  onClick={() =>
                                    setdataSlug(res.slug[0]) ||
                                    setDatacores(res.color[0]) ||
                                    setBorder("marcaImageColor") ||
                                    ProcessoImageCor
                                  }
                                  
                                  src={res.slug[0]}
                                  alt="img slug"
                                />
                              </label>
                              
                              ) : (
                                slug[0]?.charAt() == "h" ?
                                <button
                                  type="button"
                                  className="buttonColor1"
                                  onClick={() =>
                                    ProcessoImageCor || setdataSlug(color[0])
                                  }
                                >
                                  {color[0] ? color[0] : ""}
                                </button> : ""
                              )}
                              {slug[1]?.charAt() == "h" ? (
                                <label className={dataSlug === res.slug[1] ? borders : ""}>
                                  <img
                                    style={{borderRadius: 8, width: 50, height: 50, border: "solid 1px", margin: 3}}
                                    className={dataSlug === res.slug[0] ? borders : ""}
                                    onClick={() =>
                                      setdataSlug(res.slug[1]) ||
                                      setDatacores(res.color[1]) ||
                                      setBorder("marcaImageColor") ||
                                      ProcessoImageCor
                                    }
                                    
                                    src={res.slug[1]}
                                    alt="img slug"
                                    srcset=""
                                  />
                                </label>
                              ) : (
                                slug[1]?.charAt() == "h" ?
                                <button
                                  type="button"
                                  className="buttonColor1"
                                  onClick={() =>
                                    ProcessoImageCor || setdataSlug(color[1])
                                  }
                                >
                                  {color[1] ? color[1] : ""}
                                </button> : ""
                              )}
                              {slug[2]?.charAt() == "h" ? (
                                  <label className={dataSlug === res.slug[2] ? borders : ""}>
                                  <img
                                    style={{borderRadius: 8, width: 50, height: 50, border: "solid 1px", margin: 3}}
                                    className={dataSlug === res.slug[0] ? borders : ""}
                                    onClick={() =>
                                      setdataSlug(res.slug[2]) ||
                                      setDatacores(res.color[2]) ||
                                      setBorder("marcaImageColor") ||
                                      ProcessoImageCor
                                    }
                                    
                                    src={res.slug[2]}
                                    alt="img slug"
                                    srcset=""
                                  />
                                </label>
                              ) : (
                                slug[2]?.charAt() == "h" ?
                                <button
                                  type="button"
                                  className="buttonColor1"
                                  onClick={() =>
                                    ProcessoImageCor || setdataSlug(color[2])
                                  }
                                >
                                  {color[2] ? color[2] : ""}
                                </button> : ""
                              )}
                              {slug[3]?.charAt() == "h" ? (
                                  <label className={dataSlug === res.slug[3] ? borders : ""}>
                                  <img
                                    style={{borderRadius: 8, width: 50, height: 50, border: "solid 1px", margin: 3}}
                                    className={dataSlug === res.slug[0] ? borders : ""}
                                    onClick={() =>
                                      setdataSlug(res.slug[3]) ||
                                      setDatacores(res.color[3]) ||
                                      setBorder("marcaImageColor") ||
                                      ProcessoImageCor
                                    }
                                    
                                    src={res.slug[3]}
                                    alt="img slug"
                                    srcset=""
                                  />
                                </label>
                              ) : (
                                slug[3]?.charAt() == "h" ?
                                <button
                                  type="button"
                                  className="buttonColor1"
                                  onClick={() =>
                                    ProcessoImageCor || setdataSlug(color[3])
                                  }
                                >
                                  {color[3] ? color[3] : ""}
                                </button> : ""
                              )}
                              {slug[4]?.charAt() == "h" ? (
                                  <label className={dataSlug === res.slug[4] ? borders : ""}>
                                  <img
                                    style={{borderRadius: 8, width: 50, height: 50, border: "solid 1px", margin: 3}}
                                    className={dataSlug === res.slug[0] ? borders : ""}
                                    onClick={() =>
                                      setdataSlug(res.slug[4]) ||
                                      setDatacores(res.color[4]) ||
                                      setBorder("marcaImageColor") ||
                                      ProcessoImageCor
                                    }
                                    
                                    src={res.slug[4]}
                                    alt="img slug"
                                    srcset=""
                                  />
                                </label>
                              ) : (
                                slug[4]?.charAt() == "h" ?
                                <button
                                  type="button"
                                  className="buttonColor1"
                                  onClick={() =>
                                    ProcessoImageCor || setdataSlug(color[4])
                                  }
                                >
                                  {color[4] ? color[4] : ""}
                                </button> : ""
                              )}
                              {slug[5]?.charAt() == "h" ? (
                                  <label className={dataSlug === res.slug[5] ? borders : ""}>
                                  <img
                                    style={{borderRadius: 8, width: 50, height: 50, border: "solid 1px", margin: 3}}
                                    className={dataSlug === res.slug[0] ? borders : ""}
                                    onClick={() =>
                                      setdataSlug(res.slug[5]) ||
                                      setDatacores(res.color[5]) ||
                                      setBorder("marcaImageColor") ||
                                      ProcessoImageCor
                                    }
                                  
                                    src={res.slug[5]}
                                    alt="img slug"
                                    srcset=""
                                  />
                                </label>
                              ) : (
                                slug[5]?.charAt() == "h" ?
                                <button
                                  type="button"
                                  className="buttonColor1"
                                  onClick={() => setdataSlug(color[5])}
                                >
                                  {color[5] ? color[5] : ""}
                                </button> : ""
                              )}
                              {slug[6]?.charAt() == "h"? (
                                  <label className={dataSlug === res.slug[5] ? borders : ""}>
                                  <img
                                    style={{borderRadius: 8, width: 50, height: 50, border: "solid 1px", margin: 3}}
                                    className={dataSlug === res.slug[0] ? borders : ""}
                                    onClick={() =>
                                      setdataSlug(res.slug[6]) ||
                                      setDatacores(res.color[6]) ||
                                      setBorder("marcaImageColor") ||
                                      ProcessoImageCor
                                    }
                                  
                                    src={res.slug[6]}
                                    alt="img slug"
                                    srcset=""
                                  />
                                </label>
                              ) : (
                                slug[6]?.charAt() == "h" ?
                                <button
                                  type="button"
                                  className="buttonColor1"
                                  onClick={() => setdataSlug(color[6])}
                                >
                                  {color[6] ? color[6] : ""}
                                </button> : ""
                              )}
                                    
                            </>
                        </strong>
                      </p>

            
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
                            
                            <p>
                              <strong style={{ fontSize: 20, color: "#000000", marginRight: 5 }}>
                                Tamanho:
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
                              <label className={dataTamanho == divideSizeArrey[0] ? bordersTamnho : ""}>
                                <button
                                  style={{borderRadius: 8, width: divideSizeArrey[0].length > 2 ? "100%" : 30, height: 30, border: "solid 1px", margin: 3}}
                                  onClick={() => 
                                    setTamanho(divideSizeArrey[0]) ||
                                    setBorderTamnho("marcaTamanho") 
                                  }
                                >
                                  {divideSizeArrey[0]}
                                </button>
                              </label>
                            ) : (
                              ""
                            )}
                            {divideSizeArrey[1] ? (
                                <label className={dataTamanho === divideSizeArrey[1] ? bordersTamnho : ""}>
                                <button
                                  className={dataTamanho === divideSizeArrey[0] ? bordersTamnho : ""}
                                  style={{borderRadius: 8, width: 30, height: 30, border: "solid 1px", margin: 3}}
                                  onClick={() => 
                                    setTamanho(divideSizeArrey[1]) ||
                                    setBorderTamnho("marcaTamanho") 
                                  }
                                  >
                                  {divideSizeArrey[1]}
                                </button>
                              </label>
                            ) : (
                              ""
                            )}
                            {divideSizeArrey[2] ? (
                                <label className={dataTamanho === divideSizeArrey[2] ? bordersTamnho : ""}>
                                <button
                                  className={dataTamanho === divideSizeArrey[0] ? bordersTamnho : ""}
                                  style={{borderRadius: 8, width: 30, height: 30, border: "solid 1px", margin: 3}}
                                  onClick={() => 
                                    setTamanho(divideSizeArrey[2]) ||
                                    setBorderTamnho("marcaTamanho") 
                                  }
                                  >
                                  {divideSizeArrey[2]}
                                </button>
                              </label>
                            ) : (
                              ""
                            )}
                            {divideSizeArrey[3] ? (
                                <label className={dataTamanho === divideSizeArrey[3] ? bordersTamnho : ""}>
                                <button
                                  className={dataTamanho === divideSizeArrey[0] ? bordersTamnho : ""}
                                  style={{borderRadius: 8, width: 30, height: 30, border: "solid 1px", margin: 3}}
                                  onClick={() => 
                                    setTamanho(divideSizeArrey[3]) ||
                                    setBorderTamnho("marcaTamanho") 
                                  }
                                >
                                  {divideSizeArrey[3]}
                                </button>
                              </label>
                            ) : (
                              ""
                            )}
                            {divideSizeArrey[4] ? (
                              <label className={dataTamanho === divideSizeArrey[4] ? bordersTamnho : ""}>
                                <button
                                  className={dataTamanho === divideSizeArrey[0] ? bordersTamnho : ""}
                                  style={{borderRadius: 8, width: 30, height: 30, border: "solid 1px", margin: 3}}
                                  onClick={() => 
                                    setTamanho(divideSizeArrey[4]) ||
                                    setBorderTamnho("marcaTamanho") 
                                  }
                                  >
                                  {divideSizeArrey[4]}
                                </button>
                              </label>
                            ) : (
                              ""
                            )}
                            {divideSizeArrey[5] ? (
                                <label className={dataTamanho === divideSizeArrey[5] ? bordersTamnho : ""}>
                              <button
                                className={dataTamanho === divideSizeArrey[0] ? bordersTamnho : ""}
                                style={{borderRadius: 8, width: 30, height: 30, border: "solid 1px", margin: 3}}
                                onClick={() => 
                                  setTamanho(divideSizeArrey[5]) ||
                                  setBorderTamnho("marcaTamanho") 
                                }
                                >
                                {divideSizeArrey[5]}
                              </button>
                                </label>
                            ) : (
                              ""
                            )}
                            {divideSizeArrey[6] ? (
                                <label className={dataTamanho === divideSizeArrey[6] ? bordersTamnho : ""}>
                              <button
                                className={dataTamanho === divideSizeArrey[0] ? bordersTamnho : ""}
                                style={{borderRadius: 8, width: 30, height: 30, border: "solid 1px", margin: 3}}
                                onClick={() => 
                                  setTamanho(divideSizeArrey[6]) ||
                                  setBorderTamnho("marcaTamanho") 
                                }
                                >
                                {divideSizeArrey[6]}
                              </button>
                                </label>
                            ) : (
                              ""
                            )}
                            {divideSizeArrey[7] ? (
                                <label className={dataTamanho === divideSizeArrey[7] ? bordersTamnho : ""}>
                              <button
                                className={dataTamanho === divideSizeArrey[0] ? bordersTamnho : ""}
                                style={{borderRadius: 8, width: 30, height: 30, border: "solid 1px", margin: 3}}
                                onClick={() => 
                                  setTamanho(divideSizeArrey[7]) ||
                                  setBorderTamnho("marcaTamanho") 
                                }
                                >
                                {divideSizeArrey[7]}
                              </button>
                                </label>
                            ) : (
                              ""
                            )}
                            {divideSizeArrey[8] ? (
                                <label className={dataTamanho === divideSizeArrey[8] ? bordersTamnho : ""}>
                              <button
                                className={dataTamanho === divideSizeArrey[0] ? bordersTamnho : ""}
                                style={{borderRadius: 8, width: 30, height: 30, border: "solid 1px", margin: 3}}
                                onClick={() => 
                                  setTamanho(divideSizeArrey[8]) ||
                                  setBorderTamnho("marcaTamanho") 
                                }
                                >
                                {divideSizeArrey[8]}
                              </button>
                                </label>
                            ) : (
                              ""
                            )}
                            {divideSizeArrey[9] ? (
                                <label className={dataTamanho === divideSizeArrey[9] ? bordersTamnho : ""}>
                              <button
                                className={dataTamanho === divideSizeArrey[0] ? bordersTamnho : ""}
                                style={{borderRadius: 8, width: 30, height: 30, border: "solid 1px", margin: 3}}
                                onClick={() => 
                                  setTamanho(divideSizeArrey[9]) ||
                                  setBorderTamnho("marcaTamanho") 
                                }
                                >
                                {divideSizeArrey[9]}
                              </button>
                                </label>
                            ) : (
                              ""
                            )}
                          </div>
                        )}
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
                      
                    </Description>
                  </>
                )
              })}
            </InfoSection>
          </ProductWrapper>
          
          <ProductWrapper>
            <ImageSection>
              <Realacionandos />
            </ImageSection>
            <InfoSection>
              <Description>
                <div>
                  <div>
                    <strong className="EnvioParaTodoPais">
                      Envio para todo Brasil
                    </strong>
                    <br />
                    <span>
                      Entregamos seu produto o mais rapido possivel, e com a melhor qualidae.
                    </span>
                    
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
                    
                  </div>
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
                  </p>
                </div>
                  {contItems === 6 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts1[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts1[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts1[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts1[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                  {contItems === 9 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts2[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts2[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts2[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts2[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                
                  {contItems === 9 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts3[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts3[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts3[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts3[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}

                {contItems === 8 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts1[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts1[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts1[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts1[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                  {contItems === 8 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts2[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts2[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts2[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts2[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                
                  {contItems === 7 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts3[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts3[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts3[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts3[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}

                  {contItems === 7 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts1[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts1[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts1[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts1[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                  {contItems === 5 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts2[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts2[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts2[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts2[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                
                  {contItems === 4 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts3[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts3[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts3[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts3[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}

                  {contItems === 10 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts1[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts1[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts1[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts1[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                  {contItems === 10 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts2[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts2[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts2[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts2[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                
                  {contItems === 10 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts3[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts3[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts3[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts3[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}

                {contItems === 11 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts1[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts1[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts1[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts1[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                  {contItems === 11 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts2[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts2[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts2[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts2[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                
                  {contItems === 11 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts3[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts3[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts3[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts3[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}

                {contItems === 12 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts1[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts1[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts1[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts1[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                  {contItems === 12 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts2[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts2[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts2[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts2[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                
                  {contItems === 12 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts3[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts3[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts3[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts3[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}

                {contItems === 13 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts1[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts1[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts1[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts1[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                  {contItems === 13 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts2[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts2[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts2[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts2[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                
                  {contItems === 13 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts3[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts3[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts3[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts3[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}

                {contItems === 14 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts1[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts1[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts1[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts1[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                  {contItems === 14 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts2[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts2[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts2[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts2[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                
                  {contItems === 14 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts3[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts3[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts3[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts3[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}

                {contItems === 15 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts1[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts1[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts1[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts1[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                  {contItems === 15 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts2[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts2[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts2[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts2[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                
                  {contItems === 15 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts3[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts3[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts3[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts3[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}

                {contItems === 16 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts1[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts1[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts1[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts1[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                  {contItems === 16 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts2[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts2[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts2[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts2[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                
                  {contItems === 16 ? 
                  <RelationsProducts>
                    <a href={"/desc/" + filterProducts3[0]?.id}>
                      <div className="divRelationLateral">
                        <img src={filterProducts3[0]?.image[0]} alt="img" className="imgRelation" />
                        <h5 className="h5Relation">{filterProducts3[0]?.name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src={imgcart2} alt="img" className="cartImg" />
                        <h3 className="oldPrice">R${filterProducts3[0]?.price[0]},00 </h3>
                        <h4 className="oldPricereal h4Relation">
                          {" "}
                          R$ {novo_price},00
                        </h4>
                      </div>
                    </a>
                  </RelationsProducts>
                : ""}
                
              </Description>
            </InfoSection>
          </ProductWrapper>
          <ProductWrapper>
            <ImageSection>
              {dataProductFilter == "" ? (
                <CarregandoPagina />
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
                            
                          </p>
                        )}

                        {dataSlug == "" ? (
                          ""
                        ) : (
                          <p>
                            
                          </p>
                        )}
                        <br /><br />
                        <h4>
                          <strong>DESCRIÇÃO</strong>
                        </h4>
                        <p>{description}</p>
                      </div>
                    </>
                  );
                })
              )}
            </ImageSection>
            
            <InfoSection>
              <Description>
                <h4 style={{fontWeight: "bold", textAlign: "center"}}>Modo de Usar</h4>
                {dataProductFilter.map(video => {
                  const {image} = video
                  //console.log(image)
    
                  return (
                    image[5] ?
                      <ProduVideoPlay>
                        <Video>
                          <source src={image[5]} type='video/webm'/>
                        </Video>
                      </ProduVideoPlay> : ""
                  )
                  })}
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
              </Description>
            </InfoSection>
          </ProductWrapper>
          
        <ProductDetails>
          {<Comentarios />}
        </ProductDetails>
      </Container>
      </div> : CarregandoPagina()}
    
      <Footer />
   
    </>
  );
};
