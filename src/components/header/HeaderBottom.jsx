import { LiaPizzaSliceSolid } from "react-icons/lia";
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { useContext } from "react";
const HeaderBottom = () => {
  const { cart } = useContext(ProductContext);

  return (
    <div className="py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LiaPizzaSliceSolid className="text-3xl rotate-180 text-primary" />
          <p className="header-text">Куда пицца</p>
        </div>
        <button className="px-4 py-2 rounded-md bg-primary">
          <Link to="/cart" className="flex items-center gap-1">
            <BsCartCheckFill className="text-2xl text-white" />
            <p className="text-white header-text">{cart.length}</p>
            <p className="text-white header-text">₽</p>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HeaderBottom;
