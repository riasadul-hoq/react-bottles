import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import Cart from "../Cart/Cart";

import "./Bottles.css";
import {
  addToLS,
  getStoredCart,
  removeFromLS,
} from "../../utilities/localstorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  //Load Cart from Local Storage

  useEffect(() => {
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      // console.log(storedCart);
      const savedCart = [];
      for (const id of storedCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      console.log(savedCart);
      setAddToCart(savedCart);
    }
  }, [bottles]);

  const [addToCart, setAddToCart] = useState([]);

  const handleAddToCart = (bottle) => {
    console.log(`${bottle}Bottle added`);
    const newAddToCart = [...addToCart, bottle];
    setAddToCart(newAddToCart);
    addToLS(bottle.id);
  };

  const handleRemoveCart = (id) => {
    // Remove from UI
    const remainingCart = addToCart.filter((bottle) => bottle.id != id);
    setAddToCart(remainingCart);
    // Remove from LS
    removeFromLS(id);
  };

  return (
    <>
      <div>
        <h3>Number of Bottles: {bottles.length}</h3>
        <Cart addToCart={addToCart} handleRemoveCart={handleRemoveCart}></Cart>
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
