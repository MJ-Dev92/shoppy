import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
// import { useAuthContext } from "../context/AuthContext";
// import { addOrUpdateToCart } from "../api/firebase";
import useCart from "../hooks/useCart";

export default function ProductDetail() {
  // const { uid } = useAuthContext();
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: { title, image, price, description, options, category, id },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const handleClick = (e) => {
    // 여기 장바구니 추가
    const product = { id, image, title, price, options: selected, quantity: 1 };
    addOrUpdateItem.mutate(product);
    // addOrUpdateToCart(uid, product);
  };

  return (
    <>
      <p className="mx-12 mt-4 text-gray-700">{category}</p>
      <section className="flex flex-col md:flex-row p-4">
        <img className="w-full px-4 basis-7/12" src={image} alt={title} />
        <div className="w-full basis-5/12 flex flex-col">
          <h2 className="text-3xl font-bold py-2">{title}</h2>
          <p className="text-2xl font-bold py-2 border-b border-gray-400">
            ₩{price}
          </p>
          <p className="py-4 text-lg">{description}</p>
          <div className="flex items-center">
            <label className="text-brand font-bold" htmlFor="select">
              옵션:
            </label>
            <select
              className="p-4 m-4 flex-1 border-2 border-dashed border-brand outline-none"
              id="select"
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((size, index) => (
                  <option key={index}>{size}</option>
                ))}
            </select>
          </div>
          <Button text="장바구니에 추가" onClick={handleClick} />
        </div>
      </section>
    </>
  );
}
