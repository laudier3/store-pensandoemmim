import { ProductProd, ContainerVerMais } from "./productsEfect";
import { FaCreditCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../footer/footer";
import { useSelector } from "react-redux";
import { ProductsLoading } from "./ProductsLoading";
import "./styles.css";
import api from "../../api/api";
import { HeaderList } from "../header/indexList";
import "react-html5video/dist/styles.css";

export const Products = () => {
  useEffect(() => {
    window.scroll({
      top: 100,
    });
  }, []);

  const [data, setData] = useState([]);
  console.log(data)

  useEffect(() => {
    (async () => {
      const req = await api.get("/category");
      const res = await req.data;

      setData(res);
    })();
  }, []);
  
  //const ts = window.history
  //console.info(ts)//

  //console.log(data);

  const [vernais, setVermais] = useState(0);
  const [vernais2, setVermais2] = useState(0);

  const categorys = useSelector((productSlace) => productSlace.categorys);
  const tsLoading = [categorys];
  const listCategory = tsLoading.map((res) => res.items);

  //console.log(categorys, "teste") 790e0e23-e3ec-4084-b61d-986aa062e8c6

  //Filtragem de categorias por id
  const filterCategoryShortFeminino = listCategory[0]?.filter(
    (categ) => categ.id === "a1ec5c0d-b48f-4999-80f2-1c23e27073d1"
  );
  const dataShortFeminino = filterCategoryShortFeminino.map(
    (res) => res.products_categories
  );
  const ShortFeminino = dataShortFeminino.map((res) => res);
  const ShortFemininos = [ShortFeminino];

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

  const filterCategoryFerramenta = listCategory[0]?.filter(
    (categ) => categ.id === "346f1050-11fb-4156-8631-3d05f8abd209"
  );
  const dataFerramenta = filterCategoryFerramenta.map(
    (res) => res.products_categories
  );
  const Ferramenta = dataFerramenta.map((res) => res);
  const Ferramentas = [Ferramenta];

  const filterCategoryBone = listCategory[0]?.filter(
    (categ) => categ.id === "aae813a5-f2c9-4da6-a691-f0ab2391ca40"
  );
  const dataBone = filterCategoryBone.map((res) => res.products_categories);
  const Bone = dataBone.map((res) => res);
  const Bones = [Bone];

  const filterCategoryEletronico = listCategory[0]?.filter(
    (categ) => categ.id === "7195f1a8-7df6-47bf-b3e6-2459e0beb7b7"
  );
  const dataEletronico = filterCategoryEletronico.map(
    (res) => res.products_categories
  );
  const Eletronico = dataEletronico.map((res) => res);
  const Eletronicos = [Eletronico];

  const filterCategoryAudioVideo = listCategory[0]?.filter(
    (categ) => categ.id === "8b7cf3ee-29fe-46dc-9c89-4ee6a4c9b640"
  );
  const dataAudioVideo = filterCategoryAudioVideo.map((res) => res.products_categories);
  const AudioVideo = dataAudioVideo.map((res) => res);
  const AudioVideos = [AudioVideo];

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

  const filterCategoryInformatica = listCategory[0]?.filter(
    (categ) => categ.id === "13d29bf9-49ae-4500-a12e-865cbece096c"
  );
  const dataInformatica = filterCategoryInformatica.map(
    (res) => res.products_categories
  );
  const Informatica = dataInformatica.map((res) => res);
  const Informaticas = [Informatica];

  //window.onpopstate = function(event) {
  //  var count = parseInt(localStorage.getItem('history-changes-count'), 10);
  //  localStorage.setItem('history-changes-count', ++count);
  //};

  //const nameCategory = "Calça Feminina";
  //const nameCategory1 = "Conjunto Feminina";
//
  //console.log(data)

  return (
    <>
      <HeaderList />
      {filterCategoryBolsaFeminina === "" ? (
        <ProductsLoading />
      ) : (
        <div>
          {/*<TitleProduct>
            <h2 className="titleProduct">
              {filterCategoryShortFeminino === "Blusas"
                ? nameCategory
                : filterCategoryShortFeminino[0]?.name}
            </h2>
            <hr />
          </TitleProduct>*/}
          <ProductProd>
            <main>
              {ShortFemininos[0]?.map((res) =>
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
            </main>
          </ProductProd>
          {/*<TitleProduct>
            <h2 className="titleProduct">
              {filterCategoryCalcados === ""
                ? ""
                : filterCategoryCalcados[0]?.name}
            </h2>
            <hr />
          </TitleProduct>*/}
          <ProductProd>
            <main>
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
            </main>
          </ProductProd>
          {/*<TitleProduct>
            <h2 className="titleProduct">
              {filterCategoryVestido === ""
                ? ""
                : filterCategoryVestido[0]?.name}
            </h2>
            <hr />
          </TitleProduct>*/}
          <ProductProd>
            <main>
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
            </main>
          </ProductProd>
          {/*<TitleProduct>
            <h2 className="titleProduct">
              {filterCategoryFerramenta === "Conjunto F"
                ? nameCategory1
                : filterCategoryFerramenta[0]?.name}
            </h2>
            <hr />
          </TitleProduct>*/}

          <ProductProd>
            <main>
              {Ferramentas[0]?.map((res) =>
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
            </main>
          </ProductProd>
          {/*<TitleProduct>
            <h2 className="titleProduct">
              {filterCategoryBone === "" ? "" : filterCategoryBone[0]?.name}
            </h2>
            <hr />
          </TitleProduct>*/}

          <ProductProd>
            <main>
              {Bones[0]?.map((res) =>
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
            </main>
          </ProductProd>

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
          {/*<TitleProduct>
            <h2 className="titleProduct">
              {filterCategoryAudioVideo === "" ? "" : filterCategoryAudioVideo[0]?.name}
            </h2>
            <hr />
          </TitleProduct>*/}
          <ProductProd>
            <main>
              {AudioVideos[0]?.map((res) =>
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
            </main>
          </ProductProd>
          {/*<TitleProduct>
            <h2 className="titleProduct">
              {filterCategoryEstetica === ""
                ? ""
                : filterCategoryEstetica[0]?.name}
            </h2>
            <hr />
          </TitleProduct>*/}

          <ProductProd>
            <main>
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
            </main>
          </ProductProd>

          <ContainerVerMais>
            {vernais === 0 ? (
              <button className="vermais" onClick={() => setVermais(1)}>
                Ver mais
              </button>
            ) : (
              <>
                {/*<TitleProduct>
                  <h2 className="titleProduct">
                    {filterCategoryEletronico === ""
                      ? ""
                      : filterCategoryEletronico[0]?.name}
                  </h2>
                  <hr />
                </TitleProduct>*/}

                <ProductProd>
                  <main>
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
                  </main>
                </ProductProd>
                {Intimo === "" ? (
                  ""
                ) : (
                  <ProductProd>
                    <main>
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
                    </main>
                  </ProductProd>
                )}
                {/*<TitleProduct>
                  {Intimo === "" ? (
                    ""
                  ) : (
                    <>
                      <h2 className="titleProduct">
                        {filterCategoryInformatica === ""
                          ? ""
                          : filterCategoryInformatica[0]?.name}
                      </h2>
                      <hr />
                    </>
                  )}
                </TitleProduct>*/}

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
                        <main>
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
                        </main>
                      </ProductProd>
                    )}
                    
                    {/*<TitleProduct>
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
                    </TitleProduct>*/}
                    <>
                      {Intimo === "" ? (
                        ""
                      ) : (
                        <ProductProd>
                          <main>
                            {Informaticas[0]?.map((res) =>
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
                          </main>
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
