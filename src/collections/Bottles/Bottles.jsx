import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

import "./Bottles.css";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const [addToCart, setAddToCart] = useState([]);

  const handleAddToCart = (bottle) => {
    console.log(`${bottle}Bottle added`);
    const newAddToCart = [...addToCart, bottle];
    setAddToCart(newAddToCart);
  };
  return (
    <>
      <div>
        <h3>Number of Bottles: {bottles.length}</h3>
        <h3>Cart Size: {addToCart.length}</h3>
      </div>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </>
  );
};

export default Bottles;
