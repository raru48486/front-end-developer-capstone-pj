import greekSalad from './images/greek salad.jpg';
import bruchetta from './images/bruchetta.svg';
import lemonDessert from './images/lemon dessert.jpg'
import m_and_a_a from './images/Mario and Adrian A.jpg';
import m_and_a_b from './images/Mario and Adrian b.jpg';
import Card from './Card';

const Main = () => {
    return <main>
        <section className='this-weeks-specials'>
            <h2 className="sub-title">This weeks specials!</h2>
            <button id="online-menu-button">Online Menu</button>
            <section className='specials'>
                <Card img={greekSalad} name={"Greek salad"} price={"$ 12.99"} >
                    The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                </Card>
                <Card img={bruchetta} name={"Bruchetta"} price={"$ 5.99"}>
                    Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                </Card>
                <Card img={lemonDessert} name={"Lemon Dessert"} price={"$ 5.00"}>
                    This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                </Card>
            </section>
        </section>
        <section className='about'>
            <section className='description'>
                <h2 className='display-title'>Little Lemon</h2>
                <h3 className='sub-title'>Chicago</h3>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </section>
            <img src={m_and_a_a} alt={"Mario and Adrian A"}/>
            <img src={m_and_a_b} alt={"Mario and Adrian b"}/>
        </section>
    </main>;
}

export default Main;