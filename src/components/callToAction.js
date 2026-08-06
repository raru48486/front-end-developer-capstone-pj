import restauranfood from '../images/restauranfood.jpg';
import './callToAction.css';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/reservations");
    };
    return (
        <header>
            <section className='container-grid'>
                <img src={restauranfood} alt="restauran-food" />
                <h1 className='display-title'>Little Lemon</h1>
                <h2 className='sub-title'>Chicago</h2>
                <p className="lead-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button onClick={handleClick}>Reserve a table</button>
            </section>
        </header>
    );
};

export default CallToAction;