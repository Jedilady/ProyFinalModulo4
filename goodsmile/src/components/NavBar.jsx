import { Link } from "react-router-dom"
import logo from '../assets/img/logo.png';

const NavBar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt="Good Smile Logo"></img>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">Cart</Link></li>
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