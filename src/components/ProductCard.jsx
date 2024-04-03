import React from "react";

export default function ProductCard({
  product: { title, id, category, image, price },
}) {
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{`₩${price}`}</p>
      </div>
      <p>{category}</p>
    </li>
  );
}
