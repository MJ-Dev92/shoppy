import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { getCart } from "../api/firebase";
// import { useQuery } from "@tanstack/react-query";
// import { useAuthContext } from "../context/AuthContext";
import useCart from "../hooks/useCart";

export default function CartStatus() {
  // const { uid } = useAuthContext();
  // const { data: products } = useQuery({
  //   queryKey: ["carts"],
  //   queryFn: () => getCart(uid),
  // });
  const {
    cartQuery: { data: products },
  } = useCart();
  return (
    <div className="relative">
      <AiOutlineShoppingCart className="text-4xl" />
      {products && (
        <p className="w-6 h-6 text-center bg-brand text-white font-fold rounded-full absolute -top-1 -right-2">
          {products.length}
        </p>
      )}
    </div>
  );
}
