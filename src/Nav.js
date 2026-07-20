import logo from './images/Logo.svg';

const Nav = () => {
    return <nav>
        <ul>
            <li>
                <img src={logo} alt="Little Lemon Logo"/>
            </li>
            <li>
                <a href="#hoem">Home</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#menu">Menu</a>
            </li>
            <li>
                <a href="#reservations">Reservations</a>
            </li>
            <li>
                <a href="#order-online">Order Online</a>
            </li>
            <li>
                <a href="#login">Login</a>
            </li>
        </ul>
    </nav>;
}

export default Nav;