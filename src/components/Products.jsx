import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import { getProducts } from "../api/firebase";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";

export default function Products() {
  // const {
  //   isLoding,
  //   error,
  //   data: products,
  // } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: getProducts,
  //   staleTime: 1000 * 60,
  // });

  const {
    productsQuery: { isLoding, error, data: products },
  } = useProducts();

  return (
    <>
      {isLoding && <p>Loding...</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products &&
          products.map((product) => (
            <ProductCard key={products.id} product={product} />
          ))}
      </ul>
    </>
  );
}
