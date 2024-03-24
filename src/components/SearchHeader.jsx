import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function SearchHeader() {
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-300 mb-4">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <section className="w-full flex justify-end items-center">
        <Link to="/products">
          <p className="text-lg font-bold ml-3">Products</p>
        </Link>
        <Link to="carts">
          <p className="text-lg font-bold ml-3">Carts</p>
        </Link>
        <Link to="products/new">
          <BsFillPencilFill className="text-lg font-bold ml-3" />
        </Link>
        <h1 className="text-lg font-bold ml-3">Login</h1>
      </section>
    </header>
  );
}
