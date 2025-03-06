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