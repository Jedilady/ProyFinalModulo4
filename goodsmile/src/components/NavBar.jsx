import { Link } from "react-router-dom"
import logo from '../assets/img/logo.png'
import { PiShoppingCart } from 'react-icons/pi';

const NavBar = () => {
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
                    </Link>
                </li>
                <li className="cart-link-mobile">
                    <Link to="/cart">
                        <PiShoppingCart/>
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