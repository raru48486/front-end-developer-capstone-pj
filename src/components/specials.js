import "./specials.css";
import Card from './card';

/*
 * The "Specials" component accepts an array of objects, where each object represents a menu item and contains
 * properties for image URL, name, price, and description. It then iterates over this array to dynamically generate
 * individual card elements, displaying the corresponding data for each item.
 */

/**
 * @param {{menus:{name:string,img:string,price:string,description:string}[]}} param0
 */
const Specials = ({menus}) => {
    const cards = menus.map((menu, index) => {
        return <Card key={index} name={menu.name} img={menu.img} price={menu.price}>
            {menu.description}
        </Card>
    });
    return <section className="specials container-grid">
            <h2 className="sub-title">This weeks specials!</h2>
            <button>Online Menu</button>
            {cards}
    </section>;
};

export default Specials;
