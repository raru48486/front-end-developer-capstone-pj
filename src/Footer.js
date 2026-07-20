import logo from './images/little_lemon_logo_v.png';
const Footer = () => {
    return <footer>
        <img className='footer-logo' src={logo} alt="logo" />
        <h3 className='section-title'>Doormat Navigation</h3>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
        <h3 className='section-title'>Contact</h3>
        <ul>
            <li>Adress</li>
            <li>phone number</li>
            <li>email</li>
        </ul>
        <h3 className='section-title'>Social Media Links</h3>
        <ul>
            <li>Adress</li>
            <li>phone number</li>
            <li>email</li>
        </ul>
    </footer>
}

export default Footer;