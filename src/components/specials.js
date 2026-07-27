import "./specials.css";
import Card from './card';
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
