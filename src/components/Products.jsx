import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/firebase";
import ProductCard from "./ProductCard";

export default function Products() {
  const {
    isLoding,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return (
    <>
      {isLoding && <p>Loding...</p>}
      {error && <p>{error}</p>}
      <ul>
        {products &&
          products.map((product) => (
            <ProductCard key={products.id} product={product} />
          ))}
      </ul>
    </>
  );
}
