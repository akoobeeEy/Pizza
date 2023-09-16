import PropTypes from "prop-types";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { products } from "../../data/products";
const ProductCard = ({ name, description, price, id, image, filter }) => {
  const { setCart, cart } = useContext(ProductContext);

  const addToCart = (id) => {
    let product = products.find((el) => el.id === id);
    let checkCart = cart.find((el) => el.id === id);
    let newCart;
    if (checkCart) {
      newCart = cart.map((el) => {
        if (el.id === id) {
          el.quantity++;
        }
        return el;
      });
      setCart(newCart);
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
      setCart(newCart);
    }

    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  let check = cart.find((el) => el.id === id);
  return (
    <div className="relative flex flex-col p-4 overflow-hidden bg-white">
      <div className="mb-3 card-image">
        <img src={image} alt="" className="w-[242px] h-[242px] object-cover" />
      </div>
      <div className="h-32 card-body">
        <h1 className="card-title">{name}</h1>
        <p className="mb-3 ">{description}</p>
        <div className="absolute flex items-center w-full gap-20 bottom-3">
          <button
            onClick={() => addToCart(id)}
            className={check ? "buttonCheck" : "button"}
          >
            Выбрать
          </button>
          <p className="">от {price} ₽</p>
        </div>
        <div className="absolute top-6 left-6">
          {filter ? (
            <span className="px-3 py-1 text-center text-black bg-red-800 rounded-md"></span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  filter: PropTypes.string,
};
export default ProductCard;
