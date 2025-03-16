import { Link } from "react-router-dom"
import logo from '../assets/img/logo.png'
import { PiShoppingCart } from 'react-icons/pi';
//para usar el contexto de la cantidad añadida al carrito
//import CartContext from "../context/CartContext";
//import { useContext, useEffect, useState } from "react";
import { useCart } from "../customs/useCart";

const NavBar = () => {
  /*
  //Movido al hook personalizado
  const { cart } = useContext(CartContext);

  const [ cartUpdated, setCartUpdated ] = useState([]);

  useEffect(() => {
    setCartUpdated(cart);
    ammountHandler();
  }, [cart]);

  const ammountHandler = () => {
    let a = 0;
    let b = 0;
    let sum = 0;
    
    for (let value of cartUpdated) {
      b = Number(value.quantity);
      sum = a + b;
      a = sum;
    }
    return sum;
  }*/

    const{ammountHandler} = useCart();

    return (
        <div className="navbar">
            
            <nav>
                <ul>
                    <li className="nav-left">
                        <Link to="/">
                            <img src={logo} alt="Good Smile Logo"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="cart-link">
                        <Link to="/cart">
                            Cart <PiShoppingCart/>
                            <span className="cart-ammount">{ammountHandler()}</span>
                        </Link>
                    </li>
                    <li className="cart-link-mobile">
                        <Link to="/cart">
                            <PiShoppingCart/>
                            <span className="cart-ammount">{ammountHandler()}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar

//TODO
//Añadir badge al carrito, con el use Effect con algo similar a:
/*
//useEffect para verificar que el producto se ha añadido correctamente al carrito
    useEffect(() => {
        const item = cart.find((item) => item.id === parseInt(id));
        item ? setAddMore(true) : setAddMore(false);
        console.log(item, "item");    
    }, [cart])
    */