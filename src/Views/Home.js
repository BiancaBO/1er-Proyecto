import React from "react";
import Loader from "../Components.js/Loader";
import ProductCard from "../Components.js/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";
// import HelloWorld from "../Components.js/HelloWorld";

function Home() {
  const url = `https://63d7f3cbafbba6b7c947deda.mockapi.io/api/v1/products?page=1&limit=10`;

  let products = useAxiosGet(url);

  let content = null;

  if (products.error) {
    content = <p>There was an error please refresh or try again later.</p>;
  }

  if (products.loading) {
    content = <Loader></Loader>;
  }

  if (products.data) {
    content = products.data.map((product, key) => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div>
      <h1 className="font-bold text-2xl">Best Sellers</h1>
      {content}
    </div>
  );
}

export default Home;
