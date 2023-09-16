import { createContext, useState } from "react"
import {PropTypes} from "prop-types"

export const ProductContext = createContext()
const ProductProvider  = ({children}) => {
    const cartJson = localStorage.getItem("cart");
    const [cart, setCart] = useState(JSON.parse(cartJson) || []);
    const state = { cart, setCart };

   
    
  return (
    <ProductContext.Provider value={state}>
            {children}
    </ProductContext.Provider>
  )
}

ProductProvider.propTypes = {
    children: PropTypes.node,
}
export default ProductProvider