import "./Bottle.css";

const Bottle = ({ bottle }) => {
  const { name, img, price, stock, ratings } = bottle;
  return (
    <div className="bottle">
      <h4> Name: {name}</h4>
      <img src={img} alt={name}></img>
      <p>Price: £{price}</p>
      <p>Stock: {stock}</p>
      <p>Ratings: {ratings}</p>
    </div>
  );
};

export default Bottle;
