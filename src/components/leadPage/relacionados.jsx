/* eslint-disable eqeqeq */
import { useState } from "react";
import { ProductRelacionados } from "./Relacionados";
import { Link } from "react-router-dom";
import api from "../../api/api";
import { FaCreditCard } from "react-icons/fa";
import { useQuery } from "react-query";
import imgcart from "./images/card.jpg";
//import { useNavigate } from "react-router-dom"
//import { LoadingPage } from "../products/products";
//import ReactLoading from "react-loading";

export function Realacionandos() {
  //console.clear()
  //const navigate = useNavigate()

  const [data, setData] = useState([]);

  //const localId = localStorage.getItem("categoryId")

  const { isLoading } = useQuery("meuproduto", async () => {
    const req = await api.get(`/product`);
    const res = await req.data;

    setData(res);

    if (isLoading) {
      return <div className="load">Carregando...</div>;
    }
  });

  //const lastPart = localStorage.getItem("id");
  const lastPart = "dd90aefc-3c72-4cdc-8ab6-d40b7dd4aa11";

  const filterProduct = data.map((pro) => pro);
  const dataProduct = [filterProduct];
  const dataProductFilter = dataProduct[0]?.filter(
    (productData) => productData.id === lastPart
  );
  const filterProductBarcode = dataProductFilter.map((pro) => pro.bar_code);
  const dataProductFilterBarcodeList = dataProduct[0]?.filter(
    (productData) => productData.bar_code == filterProductBarcode[0]
  );

  //console.log(dataProductFilterBarcodeList);

  /*function LocalSto(e) {
    localStorage.removeItem("id");
    localStorage.removeItem("bar_code");
    localStorage.removeItem("categoryId");

    const dados = JSON.stringify(e);
    const id = JSON.parse(dados);
    localStorage.setItem("id", id.id);
    localStorage.setItem("categoryId", e.id);
    localStorage.setItem("bar_code", e.bar_code);

    setTimeout(() => {
      <LoadingPage>
        <ReactLoading
          type="spokes"
          color="aqua"
          height={"100%"}
          width={"100%"}
          delay={"100"}
        />
      </LoadingPage>;
    }, 1000);

    //const ids = localStorage.getItem("id");
    //navigate("/desc/" + ids)
    window.location.reload();

    //window.history.pushState(null, null, "/" + ids);
    //window.location.reload();
  }*/

  if (!data || !data.length) return null;

  return (
    <>
      <ProductRelacionados>
        <section className="section">
          {dataProductFilterBarcodeList.map((res) => {
            const { id, name, image, price } = res;

            let percentual = 0.25;
            let aumento = price * percentual;
            let novo_price = price - aumento;

            return (
              <Link to={"/desc/" + id}>
                <div key={id} className="divRelation">
                  <img src={image[0]} alt="img" className="imgRelation" />
                  <h5 className="h5Relation">{name}</h5>
                  <b className="frete">Frete Gratis</b>
                  <img src={imgcart} alt="img" className="cartImg" />
                  <span>
                    <p className="pRelation">
                      <FaCreditCard className="cartao" /> Em até 12x sem juros
                    </p>
                  </span>
                  <h3 className="oldPrice h3Relation">R${price},00 </h3>
                  <h4 className="oldPricereal h4Relation">
                    {" "}
                    R$ {novo_price},00
                  </h4>
                </div>
              </Link>
            );
          })}
        </section>
      </ProductRelacionados>
    </>
  );
}
