import bike from '../images/bike.svg';
import './card.css';

const Card = ({ children, img, name, price }) => {
    return <article className="card">
        <img className="card-image" src={img} alt={name} />
        <h3 className="card-title">{name}</h3>
        <span className="card-price">{price}</span>
        <div className="card-content">
            {children}
        </div>
        <div className="order-button">Order a delivery<img src={bike} alt="Order a delivery" /></div>
    </article>;
}

export default Card;