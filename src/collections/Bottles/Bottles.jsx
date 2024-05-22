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
  return (
    <>
      <div>
        <h3>Number of Bottles: {bottles.length}</h3>
      </div>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle}></Bottle>
        ))}
      </div>
    </>
  );
};

export default Bottles;
