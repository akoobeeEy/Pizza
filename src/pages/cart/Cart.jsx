import PropTypes from "prop-types";

import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const CartCard = () => {
  const { cart, addToCart } = useContext(ProductContext);

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  const handleIncrement = (item) => {
    addToCart({ ...item, quantity: item.quantity + 1 });
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      addToCart({ ...item, quantity: item.quantity - 1 });
    }
  };
  return (
    <div className="mt-40">
      {cart.map((res) => (
        <div key={res.id} className="w-full p-8 mb-10 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-10">
            <img src={res.image} alt="" className="w-[142px] h-[142px]"/>
            <div className="">
              <h3>{res.name}</h3>
              <p>{res.description}</p>
            </div>
            </div>
      
          
            <div className="flex items-center gap-10">
            <div className="flex gap-2">
              <button
                className="button"
                onClick={() => handleDecrement(res)}
              >
                -
              </button>
              <button className="button">{res.quantity}</button>
              <button
                className="button"
                onClick={() => handleIncrement(res)}
              >
                +
              </button>
            </div>
            <p>
              <span>{res.price}</span>
            </p>
          </div>
          </div>
         
        </div>
      ))}
      <div id="pagination-container"></div>
      <div className="total_price">
        <p className="total_price">
          <span>Итоговая цена</span> {getTotalPrice()} ₽
        </p>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
};

export default CartCard;
