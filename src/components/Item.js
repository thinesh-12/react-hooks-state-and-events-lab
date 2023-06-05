import React, { useState }from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const itemClass = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setInCart(!inCart)}> {buttonText} </button>
    </li>
  );
}

export default Item;
