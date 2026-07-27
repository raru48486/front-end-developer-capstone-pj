import logo from "../images/Logo.svg";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
    return (
        <nav className="container-grid">
            <img className="nav-logo" src={logo} alt="Little Lemon Logo" />
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#menu">Menu</a>
                </li>
                <li>
                    <Link to="/reservations">Reservations</Link>
                </li>
                <li>
                    <a href="#order-online">Order Online</a>
                </li>
                <li>
                    <a href="#login">Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;