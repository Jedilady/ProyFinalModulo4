import CartContext from "../context/CartContext";
import { useContext, useEffect, useState } from "react";
import Title from '../components/Title'
import { Link } from "react-router-dom";

const Cart = () => {

  // ------ SECCION DEL REDUCER del CART --------- //
  //Llamada al contexto del Cart que llama al CartReducer
  const { dispatch, cart } = useContext(CartContext);
  console.log(cart, "from cart");

  //Manejador del dispatch REMOVE ITEM 
  const handleRemoveFromCart = (product) => {
    dispatch({ type: "REMOVE_ITEM", payload: product });
    //state.filter((item) => item.id !== action.payload);
  };

  //manejador del SUM ITEM 
  const handleSumItemtoCart = (item) => {
    dispatch({ type: "SUM_ITEM", payload: item })
  }
  //manejador del MINUS ITEM 
  const handleMinusItemtoCart = (item) => {
    dispatch({ type: "MINUS_ITEM", payload: item })
  }

  //Manejador del CLEAR CART
  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  //useState para manejar los cambios en el cart
  const [ cartUpdated, setCartUpdated ] = useState([]);

  useEffect(() => {
    setCartUpdated(cart);
    subtotalHandler();
  }, [cart]);

    //Manejador del subtotal
    const subtotalHandler = () => {
      let a = 0;
      let b = 0;
      let sum = 0;
      //console.log("cartUpdated", cartUpdated);
      
      for (let value of cartUpdated) {
        b = Number(value.quantity) * Number(value.price);
        //console.log("subtotal:", value, value.quantity, value.price);
        //console.log(a, b);
        sum = a + b;
        a = sum;
        //console.log(sum, a, "b", b);
      }
      return sum;
      //cartUploaded.map(product)product.quantity*product.price
    }

  return (
    <div className="cart-wrapper">
      <Title title="Shopping cart" />
      { cartUpdated.length === 0 && 
        <>
          <p>Yoour cart is empty</p>
          <Link to={'/products'}>Go back to products</Link>
        </>
      }
      { cartUpdated.length !== 0 &&
        <>
          <div className="cart-list">
            {cartUpdated.map((producto) => (
              <div className="cart-product-row" key={producto.id}>
                <h2>{producto.name}</h2>
                <img src={producto.image} />
                <p>
                  {producto.price}€ - {producto.quantity}
                </p>
                {producto.quantity > 1 
                  ? <button 
                      onClick={() => handleMinusItemtoCart(producto)}>
                        -
                    </button>
                  : <button 
                      onClick={() => handleRemoveFromCart(producto)}>
                        Tr
                      </button>}
                <button 
                  onClick={() => handleSumItemtoCart(producto)}>
                    +
                </button>
                <button 
                  onClick={() => handleRemoveFromCart(producto)}>
                    Remove
                </button>
              </div>
            ))}
          </div>
          <div className="subtotal-card">
            <p>Subtotal: {subtotalHandler()}</p>
            
          </div>
        </>
      }

    </div>
  )
}

export default Cart
