import React from "react";
import { getCart } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import { CartItem } from "../components/CartItem";

export default function MyCart() {
  const { uid } = useAuthContext();
  const { isLoding, data: products } = useQuery({
    queryKey: ["carts"],
    queryFn: () => getCart(uid),
  });

  if (isLoding) return <p>Loading...</p>;
  const hasProducts = products && products.length > 0;
  return (
    <section>
      <p>내 장바구니</p>
      {!hasProducts && <p>장바구니에 상품이 없습니다. 열심히 쇼핑해 주세요!</p>}
      {hasProducts && (
        <>
          <ul>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
