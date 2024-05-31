const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  } else return [];
};

const addToLS = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const removeFromLS = (id) => {
  const cart = getStoredCart();
  // Multiple Bottle with same ID will be removed form the cart
  const remaining = cart.filter((idx) => idx != id);
  const cartStringified = JSON.stringify(remaining);
  localStorage.setItem("cart", cartStringified);
};

export { addToLS, getStoredCart, removeFromLS };
