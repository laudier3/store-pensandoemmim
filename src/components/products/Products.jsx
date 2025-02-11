import { ProductProd, ContainerVerMais, TitleProduct } from "./productsEfect";
import { FaCreditCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../footer/footer";
import { useSelector } from "react-redux";
import { ProductsLoading } from "./ProductsLoading";
//import imgCopy from "./images/Decontos.gif";
import "./styles.css";
import api from "../../api/api";
import { HeaderList } from "../header/indexList";
//import { ProduVideoPlay2 } from "./ReactVideoPlay";
//import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import video from "./Videos/64002613_9555186.psd.mp4";

export const Products = () => {
  useEffect(() => {
    window.scroll({
      top: 100,
    });
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const req = await api.get("/category");
      const res = await req.data;

      setData(res);
    })();
  }, []);

  //console.log(data);

  const [vernais, setVermais] = useState(0);
  const [vernais2, setVermais2] = useState(0);

  //chamada api via redux e axios
  const categorys = useSelector((productSlace) => productSlace.categorys);
  const tsLoading = [categorys];
  const listCategory = tsLoading.map((res) => res.items);

  //console.log(categorys, "teste") 790e0e23-e3ec-4084-b61d-986aa062e8c6

  //Filtragem de categorias por id
  const filterCategoryBlusaFeminina = listCategory[0]?.filter(
    (categ) => categ.id === "93158fac-7da5-4502-ab51-fd88b147fba7"
  );
  const dataBlusaFeminina = filterCategoryBlusaFeminina.map(
    (res) => res.products_categories
  );
  const BlusaFeminina = dataBlusaFeminina.map((res) => res);
  const BlusaFemininas = [BlusaFeminina];

  const filterCategoryBolsaFeminina = listCategory[0]?.filter(
    (categ) => categ.id === "daee8439-b25c-47a4-b1a5-72ab1cadb938"
  );
  const dataBolsaFeminina = filterCategoryBolsaFeminina.map(
    (res) => res.products_categories
  );
  const BolsaFeminina = dataBolsaFeminina.map((res) => res);
  const BolsaFemininas = [BolsaFeminina];

  const filterCategoryCalcados = listCategory[0]?.filter(
    (categ) => categ.id === "a9b741ff-e847-4c0e-962d-4cbe9e7a62a3"
  );
  const dataCalcados = filterCategoryCalcados.map(
    (res) => res.products_categories
  );
  const Calcados = dataCalcados.map((res) => res);
  const Calcado = [Calcados];

  const filterCategoryVestido = listCategory[0]?.filter(
    (categ) => categ.id === "b81eae77-d05c-4d5b-99e1-f970e1111df5"
  );
  const dataVestido = filterCategoryVestido.map(
    (res) => res.products_categories
  );
  const Vestido = dataVestido.map((res) => res);
  const Vestidos = [Vestido];

  const filterCategoryConjuntoFeminino = listCategory[0]?.filter(
    (categ) => categ.id === "89669525-dace-4256-a783-9ad59cd03622"
  );
  const dataConjuntoFeminino = filterCategoryConjuntoFeminino.map(
    (res) => res.products_categories
  );
  const ConjuntoFeminino = dataConjuntoFeminino.map((res) => res);
  const ConjuntoFemininos = [ConjuntoFeminino];

  const filterCategorySaia = listCategory[0]?.filter(
    (categ) => categ.id === "a8990632-bace-4550-b722-6bae4fd37b02"
  );
  const dataSaia = filterCategorySaia.map((res) => res.products_categories);
  const Saia = dataSaia.map((res) => res);
  const Saias = [Saia];

  const filterCategoryEletronico = listCategory[0]?.filter(
    (categ) => categ.id === "7195f1a8-7df6-47bf-b3e6-2459e0beb7b7"
  );
  const dataEletronico = filterCategoryEletronico.map(
    (res) => res.products_categories
  );
  const Eletronico = dataEletronico.map((res) => res);
  const Eletronicos = [Eletronico];

  const filterCategoryBody = listCategory[0]?.filter(
    (categ) => categ.id === "faa46edc-e25d-49e6-9054-6a47dde483d4"
  );
  const dataBody = filterCategoryBody.map((res) => res.products_categories);
  const Body = dataBody.map((res) => res);
  const Bodys = [Body];

  const filterCategoryEstetica = listCategory[0]?.filter(
    (categ) => categ.id === "78c0fb76-a383-49d5-80ae-d0601cc855b3"
  );
  const dataEstetica = filterCategoryEstetica.map(
    (res) => res.products_categories
  );
  const Estetica = dataEstetica.map((res) => res);
  const Esteticas = [Estetica];

  const filterCategoryMacaquinho = listCategory[0]?.filter(
    (categ) => categ.id === "389354f6-0fbe-4ff3-8fd7-1b56e68db756"
  );
  const dataMacaquinho = filterCategoryMacaquinho.map(
    (res) => res.products_categories
  );
  const Macaquinho = dataMacaquinho.map((res) => res);
  // eslint-disable-next-line no-unused-vars
  const Macaquinhos = [Macaquinho];

  //console.log(Macaquinhos, "teste");

  const filterCategoryIntimo = listCategory[0]?.filter(
    (categ) => categ.id === "0f7bc4a5-357f-46c0-b3d6-48b5a8219078"
  );
  const dataIntimo = filterCategoryIntimo.map((res) => res.products_categories);
  const Intimo = dataIntimo.map((res) => res);
  const Intimos = [Intimo];

  const filterCategoryAcessorio = listCategory[0]?.filter(
    (categ) => categ.id === "69553e36-9e1d-4807-b089-470725b510f6"
  );
  const dataAcessorio = filterCategoryAcessorio.map(
    (res) => res.products_categories
  );
  const Acessorio = dataAcessorio.map((res) => res);
  const Acessorios = [Acessorio];

  const nameCategory = "Calça Feminina";
  const nameCategory1 = "Conjunto Feminina";

  console.log(data)

  return (
    <>
      <HeaderList />
      {filterCategoryBolsaFeminina === "" ? (
        <ProductsLoading />
      ) : (
        <div>
          <TitleProduct>
            <h2 className="titleProduct">
              {filterCategoryBlusaFeminina === "Blusas"
                ? nameCategory
                : filterCategoryBlusaFeminina[0]?.name}
            </h2>
            <hr />
          </TitleProduct>
          <ProductProd>
            <section>
              {BlusaFemininas[0]?.map((res) =>
                res.map((req) => {
                  //localStorage.removeItem("id")
                  const { id, name, image, price } = req.products;

                  let percentual = 0.25;
                  let aumento = price * percentual;
                  let novo_price = price - aumento;

                  return (
                    <Link to={"/desc/" + id}>
                      <div key={id}>
                        <img src={image[0]} alt="img" />
                        <h5>{name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src="card.jpg" alt="img" className="cartImg" />
                        <span>
                          <p className="p">
                            <FaCreditCard className="cartao" /> Em até 12x sem
                            juros
                          </p>
                        </span>
                        <h3 className="oldPrice">R${price},00 </h3>
                        <h1 className="oldPricereal"> R$ {novo_price},00</h1>
                      </div>
                    </Link>
                  );
                })
              )}
            </section>
          </ProductProd>
          <TitleProduct>
            <h2 className="titleProduct">
              {filterCategoryCalcados === ""
                ? ""
                : filterCategoryCalcados[0]?.name}
            </h2>
            <hr />
          </TitleProduct>
          <ProductProd>
            <section>
              {Calcado[0]?.map((res) =>
                res.map((req) => {
                  //console.log(filterCategoryVestido)

                  const { id, name, image, price } = req.products;

                  let percentual = 0.25;
                  let aumento = price * percentual;
                  let novo_price = price - aumento;

                  return (
                    <Link to={"/desc/" + id}>
                      <div key={id}>
                        <img src={image[0]} alt="img" />
                        <h5>{name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src="card.jpg" alt="img" className="cartImg" />
                        <span>
                          <p className="p">
                            <FaCreditCard className="cartao" /> Em até 12x sem
                            juros
                          </p>
                        </span>
                        <h3 className="oldPrice">R${price},00 </h3>
                        <h4 className="oldPricereal"> R$ {novo_price},00</h4>
                      </div>
                    </Link>
                  );
                })
              )}
            </section>
          </ProductProd>
          <TitleProduct>
            <h2 className="titleProduct">
              {filterCategoryVestido === ""
                ? ""
                : filterCategoryVestido[0]?.name}
            </h2>
            <hr />
          </TitleProduct>
          <ProductProd>
            <section>
              {Vestidos[0]?.map((res) =>
                res.map((req) => {
                  //console.log(filterCategoryVestido)

                  const { id, name, image, price } = req.products;

                  let percentual = 0.25;
                  let aumento = price * percentual;
                  let novo_price = price - aumento;

                  return (
                    <Link to={"/desc/" + id}>
                      <div key={id}>
                        <img src={image[0]} alt="img" />
                        <h5>{name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src="card.jpg" alt="img" className="cartImg" />
                        <span>
                          <p className="p">
                            <FaCreditCard className="cartao" /> Em até 12x sem
                            juros
                          </p>
                        </span>
                        <h3 className="oldPrice">R${price},00 </h3>
                        <h4 className="oldPricereal"> R$ {novo_price},00</h4>
                      </div>
                    </Link>
                  );
                })
              )}
            </section>
          </ProductProd>
          <TitleProduct>
            <h2 className="titleProduct">
              {filterCategoryConjuntoFeminino === "Conjunto F"
                ? nameCategory1
                : filterCategoryConjuntoFeminino[0]?.name}
            </h2>
            <hr />
          </TitleProduct>

          <ProductProd>
            <section>
              {ConjuntoFemininos[0]?.map((res) =>
                res.map((req) => {
                  //console.log(filterCategoryVestido)

                  const { id, name, image, price } = req.products;

                  let percentual = 0.25;
                  let aumento = price * percentual;
                  let novo_price = price - aumento;

                  return (
                    <Link to={"/desc/" + id}>
                      <div key={id}>
                        <img src={image[0]} alt="img" />
                        <h5>{name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src="card.jpg" alt="img" className="cartImg" />
                        <span>
                          <p className="p">
                            <FaCreditCard className="cartao" /> Em até 12x sem
                            juros
                          </p>
                        </span>
                        <h3 className="oldPrice">R${price},00 </h3>
                        <h4 className="oldPricereal"> R$ {novo_price},00</h4>
                      </div>
                    </Link>
                  );
                })
              )}
            </section>
          </ProductProd>
          <TitleProduct>
            <h2 className="titleProduct">
              {filterCategorySaia === "" ? "" : filterCategorySaia[0]?.name}
            </h2>
            <hr />
          </TitleProduct>

          <ProductProd>
            <section>
              {Saias[0]?.map((res) =>
                res.map((req) => {
                  //console.log(filterCategoryVestido)

                  const { id, name, image, price } = req.products;

                  let percentual = 0.25;
                  let aumento = price * percentual;
                  let novo_price = price - aumento;

                  return (
                    <Link to={"/desc/" + id}>
                      <div key={id}>
                        <img src={image[0]} alt="img" />
                        <h5>{name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src="card.jpg" alt="img" className="cartImg" />
                        <span>
                          <p className="p">
                            <FaCreditCard className="cartao" /> Em até 12x sem
                            juros
                          </p>
                        </span>
                        <h3 className="oldPrice">R${price},00 </h3>
                        <h4 className="oldPricereal"> R$ {novo_price},00</h4>
                      </div>
                    </Link>
                  );
                })
              )}
            </section>
          </ProductProd>

          <br />
          <br />
          <br />
          <br />

          <>
            {/*<ProduVideoPlay2>
              <Video>
                <source src={video} type="video/webm" />
              </Video>
              <a href="novidades" target="_blank" className="saibamais">
                Ver mais Detalhis
              </a>
            </ProduVideoPlay2>*/}
          </>
          {/* <SlidsListProductsRevert />*/}
          <TitleProduct>
            <h2 className="titleProduct">
              {filterCategoryBody === "" ? "" : filterCategoryBody[0]?.name}
            </h2>
            <hr />
          </TitleProduct>
          <ProductProd>
            <section>
              {Bodys[0]?.map((res) =>
                res.map((req) => {
                  //console.log(filterCategoryVestido)

                  const { id, name, image, price } = req.products;

                  let percentual = 0.25;
                  let aumento = price * percentual;
                  let novo_price = price - aumento;

                  return (
                    <Link to={"/desc/" + id}>
                      <div key={id}>
                        <img src={image[0]} alt="img" />
                        <h5>{name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src="card.jpg" alt="img" className="cartImg" />
                        <span>
                          <p className="p">
                            <FaCreditCard className="cartao" /> Em até 12x sem
                            juros
                          </p>
                        </span>
                        <h3 className="oldPrice">R${price},00 </h3>
                        <h4 className="oldPricereal"> R$ {novo_price},00</h4>
                      </div>
                    </Link>
                  );
                })
              )}
            </section>
          </ProductProd>
          <TitleProduct>
            <h2 className="titleProduct">
              {filterCategoryEstetica === ""
                ? ""
                : filterCategoryEstetica[0]?.name}
            </h2>
            <hr />
          </TitleProduct>

          <ProductProd>
            <section>
              {Esteticas[0]?.map((res) =>
                res.map((req) => {
                  //console.log(filterCategoryVestido)

                  const { id, name, image, price } = req.products;

                  let percentual = 0.25;
                  let aumento = price * percentual;
                  let novo_price = price - aumento;

                  return (
                    <Link to={"/desc/" + id}>
                      <div key={id}>
                        <img src={image[0]} alt="img" />
                        <h5>{name}</h5>
                        <b className="frete">Frete Gratis</b>
                        <img src="card.jpg" alt="img" className="cartImg" />
                        <span>
                          <p className="p">
                            <FaCreditCard className="cartao" /> Em até 12x sem
                            juros
                          </p>
                        </span>
                        <h3 className="oldPrice">R${price},00 </h3>
                        <h4 className="oldPricereal"> R$ {novo_price},00</h4>
                      </div>
                    </Link>
                  );
                })
              )}
            </section>
          </ProductProd>

          <ContainerVerMais>
            {vernais === 0 ? (
              <button className="vermais" onClick={() => setVermais(1)}>
                Ver mais
              </button>
            ) : (
              <>
                <TitleProduct>
                  <h2 className="titleProduct">
                    {filterCategoryEletronico === ""
                      ? ""
                      : filterCategoryEletronico[0]?.name}
                  </h2>
                  <hr />
                </TitleProduct>

                <ProductProd>
                  <section>
                    {Eletronicos[0]?.map((res) =>
                      res.map((req) => {
                        //console.log(filterCategoryVestido)

                        const { id, name, image, price } = req.products;

                        let percentual = 0.25;
                        let aumento = price * percentual;
                        let novo_price = price - aumento;

                        return (
                          <Link to={"/desc/" + id}>
                            <div key={id}>
                              <img src={image[0]} alt="img" />
                              <h5>{name}</h5>
                              <b className="frete">Frete Gratis</b>
                              <img
                                src="card.jpg"
                                alt="img"
                                className="cartImg"
                              />
                              <span>
                                <p className="p">
                                  <FaCreditCard className="cartao" /> Em até 12x
                                  sem juros
                                </p>
                              </span>
                              <h3 className="oldPrice">R${price},00 </h3>
                              <h4 className="oldPricereal">
                                {" "}
                                R$ {novo_price},00
                              </h4>
                            </div>
                          </Link>
                        );
                      })
                    )}
                  </section>
                </ProductProd>
                {Intimo === "" ? (
                  ""
                ) : (
                  <ProductProd>
                    <section>
                      {BolsaFemininas[0]?.map((res) =>
                        res.map((req) => {
                          //console.log(filterCategoryVestido)

                          const { id, name, image, price } = req.products;

                          let percentual = 0.25;
                          let aumento = price * percentual;
                          let novo_price = price - aumento;

                          return (
                            <Link to={"/desc/" + id}>
                              <div key={id}>
                                <img src={image[0]} alt="img" />
                                <h5>{name}</h5>
                                <b className="frete">Frete Gratis</b>
                                <img
                                  src="card.jpg"
                                  alt="img"
                                  className="cartImg"
                                />
                                <span>
                                  <p className="p">
                                    <FaCreditCard className="cartao" /> Em até
                                    12x sem juros
                                  </p>
                                </span>
                                <h3 className="oldPrice">R${price},00 </h3>
                                <h4 className="oldPricereal">
                                  {" "}
                                  R$ {novo_price},00
                                </h4>
                              </div>
                            </Link>
                          );
                        })
                      )}
                    </section>
                  </ProductProd>
                )}
                <TitleProduct>
                  {Intimo === "" ? (
                    ""
                  ) : (
                    <>
                      <h2 className="titleProduct">
                        {filterCategoryAcessorio === ""
                          ? ""
                          : filterCategoryAcessorio[0]?.name}
                      </h2>
                      <hr />
                    </>
                  )}
                </TitleProduct>

                {vernais2 === 0 ? (
                  <button className="vermais" onClick={() => setVermais2(1)}>
                    Ver mais
                  </button>
                ) : (
                  <>
                    {Intimo === "" ? (
                      ""
                    ) : (
                      <ProductProd>
                        <section>
                          {Intimos[0]?.map((res) =>
                            res.map((req) => {
                              //console.log(filterCategoryVestido)

                              const { id, name, image, price } = req.products;

                              let percentual = 0.25;
                              let aumento = price * percentual;
                              let novo_price = price - aumento;

                              return (
                                <Link to={"/desc/" + id}>
                                  <div key={id}>
                                    <img src={image[0]} alt="img" />
                                    <h5>{name}</h5>
                                    <b className="frete">Frete Gratis</b>
                                    <img
                                      src="card.jpg"
                                      alt="img"
                                      className="cartImg"
                                    />
                                    <span>
                                      <p className="p">
                                        <FaCreditCard className="cartao" /> Em
                                        até 12x sem juros
                                      </p>
                                    </span>
                                    <h3 className="oldPrice">R${price},00 </h3>
                                    <h4 className="oldPricereal">
                                      {" "}
                                      R$ {novo_price},00
                                    </h4>
                                  </div>
                                </Link>
                              );
                            })
                          )}
                        </section>
                      </ProductProd>
                    )}
                    }
                    <TitleProduct>
                      {Intimo === "" ? (
                        ""
                      ) : (
                        <>
                          <h2 className="titleProduct">
                            {filterCategoryIntimo === ""
                              ? ""
                              : filterCategoryIntimo[0]?.name}
                          </h2>
                          <hr />
                        </>
                      )}
                    </TitleProduct>
                    <>
                      {Intimo === "" ? (
                        ""
                      ) : (
                        <ProductProd>
                          <section>
                            {Acessorios[0]?.map((res) =>
                              res.map((req) => {
                                //console.log(filterCategoryVestido)

                                const { id, name, image, price } = req.products;

                                let percentual = 0.25;
                                let aumento = price * percentual;
                                let novo_price = price - aumento;

                                return (
                                  <Link to={"/desc/" + id}>
                                    <div key={id}>
                                      <img src={image[0]} alt="img" />
                                      <h5>{name}</h5>
                                      <b className="frete">Frete Gratis</b>
                                      <img
                                        src="card.jpg"
                                        alt="img"
                                        className="cartImg"
                                      />
                                      <span>
                                        <p className="p">
                                          <FaCreditCard className="cartao" /> Em
                                          até 12x sem juros
                                        </p>
                                      </span>
                                      <h3 className="oldPrice">
                                        R${price},00{" "}
                                      </h3>
                                      <h4 className="oldPricereal">
                                        {" "}
                                        R$ {novo_price},00
                                      </h4>
                                    </div>
                                  </Link>
                                );
                              })
                            )}
                          </section>
                        </ProductProd>
                      )}
                    </>
                  </>
                )}
              </>
            )}
          </ContainerVerMais>
        </div>
      )}
      <Footer />
    </>
  );
};
