// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { usePreloadImages } from "../hooks/usePreloadImages";
import api from "../../api/api";

export const ProductsImagesn = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const res = await api.get("/produtc");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };
    loadData();
  }, []);

  const imageUrls = products.map((product) => product.image);

  usePreloadImages(imageUrls);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <img src={p.image} alt={p.name} width={200} />
        </div>
      ))}
    </div>
  );
};

