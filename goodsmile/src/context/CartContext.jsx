import { createContext, useReducer } from "react";
import CartHandlerReducer from "../reducer/CartHandlerReducer";

//creamos el contexto con el que manejaremos las acciones del carrito
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartHandlerReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

//Here we have initialised `cartReducer` utilising useReducer hook and then passing it globally using useContext hook. This allows us to read store state and dispatch actions easily anywhere within the app.

//instructions followed from https://saurabhnativeblog.medium.com/react30-project-18-shopping-cart-app-by-utilising-usereducer-hook-c9580d037d2d