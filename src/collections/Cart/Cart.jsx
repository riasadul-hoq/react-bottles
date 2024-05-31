import PropTypes from "prop-types";
import "./Cart.css";

const Cart = ({ addToCart, handleRemoveCart }) => {
  return (
    <div>
      <h3>Shopping Cart: {addToCart.length}</h3>
      <div className="cart-container">
        {addToCart.map((bottle) => (
          <div key={bottle.id}>
            <img src={bottle.img} alt={bottle.name}></img>
            <br></br>
            <button
              className="cart-button"
              onClick={() => handleRemoveCart(bottle.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  addToCart: PropTypes.array.isRequired,
  handleRemoveCart: PropTypes.func.isRequired,
};

export default Cart;
