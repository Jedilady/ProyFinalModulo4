import CartContext from "../context/CartContext";
import { useContext, useEffect, useState } from "react";
import Title from '../components/Title'
import { Link } from "react-router-dom";
import { PiMinusBold, PiPlusBold, PiTrash } from 'react-icons/pi';

//TO DO Separar el contenido en dos componentes (ya creados), uno de la lista, el otro del subtotal
//pasar el array por props???
//
//TO DO agregar el botón "limpiar carrito"
// 
//TO DO agregar alertas de "seguro quieres eliminar?"
//
//TO DO Botón fake de "checkout"

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
      return sum.toFixed(2);
      //cartUploaded.map(product)product.quantity*product.price
    }

  return (
    <>
      <Title title="Shopping cart" />
      <div className="cart-wrapper">
        { cartUpdated.length === 0 && 
          <>
            <p className="cart-empty-msg">Your cart is empty</p>
            <Link className="btn-main" to={'/products'}>Go back to products</Link>
          </>
        }
        { cartUpdated.length !== 0 &&
          <div className="cart-wrapper-grid">
            <div className="cart-list">
              {cartUpdated.map((producto) => (
                <div className="cart-product-row" key={producto.id}>
                  <img src={producto.image} />
                  <div className="cart-product-row-details">
                    <h2>{producto.name}</h2>
                    <p className="cart-product-price">
                    €{producto.price}
                    </p>
                    <div className="cart-product-quantity-wrapper">
                      <div className="cart-product-quantity-handler">
                        {producto.quantity > 1 
                          ? <button 
                              className="cart-product-btn"
                              onClick={() => handleMinusItemtoCart(producto)}>
                                <PiMinusBold />
                            </button>
                          : <button 
                              className="cart-product-btn cart-product-btn-trash"
                              onClick={() => handleRemoveFromCart(producto)}>
                                <PiTrash />
                              </button>}
                              {producto.quantity}
                        <button 
                          className="cart-product-btn"
                          onClick={() => handleSumItemtoCart(producto)}>
                            <PiPlusBold />
                        </button>
                      </div>
                      <button 
                        className="cart-product-btn-remove"
                        onClick={() => handleRemoveFromCart(producto)}>
                          Remove
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
            <div className="subtotal-card">
              <p>Subtotal: <strong>€{subtotalHandler()}</strong></p>
              <a className="btn-main">Continue to checkout</a>
              
            </div>
          
          </div>
        }
      </div>
    </>
  )
}

export default Cart
