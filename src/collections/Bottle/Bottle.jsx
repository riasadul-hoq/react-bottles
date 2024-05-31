import PropTypes from "prop-types";
import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, price, stock, ratings } = bottle;
  return (
    <div className="bottle">
      <h4> Name: {name}</h4>
      <img src={img} alt={name}></img>
      <p>Price: £{price}</p>
      <p>Stock: {stock}</p>
      <p>Ratings: {ratings}</p>
      <button className="bottle-button" onClick={() => handleAddToCart(bottle)}>
        Purchase
      </button>
    </div>
  );
};

Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default Bottle;
