import CartContext from "../context/CartContext";
import { useContext } from "react";
import Title from '../components/Title'

const Cart = () => {

  //Llamada al contexto del Cart que llama al CartReducer
  const { dispatch, cart } = useContext(CartContext);
  console.log(cart, "from cart");
  
  return (
    <div>
      <Title title="Shopping cart"/>
    </div>
  )
}

export default Cart
