import restauranfood from '../images/restauranfood.jpg';
import './callToAction.css';

const CallToAction = () => {
    return (
        <header>
            <section className='container-grid'>
                <img src={restauranfood} alt="restauran-food" />
                <h1 className='display-title'>Little Lemon</h1>
                <h2 className='sub-title'>Chicago</h2>
                <p className="lead-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button>Reserve a table</button>
            </section>
        </header>
    );
};

export default CallToAction;