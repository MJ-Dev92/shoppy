import React, { useEffect } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { login, logout, onUserStateChange } from "../api/firebase";
import { useState } from "react";
import User from "./User";

export default function SearchHeader() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        {user && <Link to="carts">Carts</Link>}
        {user && (
          <Link to="products/new">
            <BsFillPencilFill className="text-2xl" />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && (
          <button className="bg-brand w-[80px] h-10 rounded" onClick={login}>
            Login
          </button>
        )}
        {user && (
          <button className="bg-brand w-[80px] h-10 rounded" onClick={logout}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}
