import CallToAction from "../components/callToAction";
import Specials from "../components/specials";
import CustomersSay from "../components/customerssay";
import Chicago from "../components/chicago";
import Footer from "../components/footer";

import greekSalad from '../images/greek salad.jpg';
import bruchetta from '../images/bruchetta.svg';
import lemonDessert from '../images/lemon dessert.jpg';
import reviewer1 from '../images/reviewers/reviewer1.png';
import reviewer2 from '../images/reviewers/reviewer2.png';
import reviewer3 from '../images/reviewers/reviewer3.png';
import reviewer4 from '../images/reviewers/reviewer4.png';

const Home = () => {
    const specials = [
        { img: greekSalad, name: "Greek salad", price: "$ 12.99", description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." },
        { img: bruchetta, name: "Bruchetta", price: "$ 5.99", description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." },
        { img: lemonDessert, name: "Lemon Dessert", price: "$ 5.00", description: "his comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." },
    ]
    const reviewers = [
        {
            id: 1,
            name: "Michael Alex",
            image: reviewer1,
            rating: 5,
            review: "Little Lemon is my absolute go-to spot in the city! The atmosphere is warm and welcoming..."
        },
        {
            id: 2,
            name: "David Miller",
            image: reviewer2,
            rating: 5,
            review: "An outstanding dining experience from start to finish. The ambiance strikes a perfect balance..."
        },
        {
            id: 3,
            name: "Emily Watson",
            image: reviewer3,
            rating: 5,
            review: "We had such a wonderful evening here with friends! From the moment we walked in..."
        },
        {
            id: 4,
            name: "Sophia Martinez",
            image: reviewer4,
            rating: 5,
            review: "This was my first time visiting Little Lemon, and it exceeded all my expectations!..."
        }
    ];
    return <>
        <CallToAction />
        <main>
            <Specials menus={specials} />
            <CustomersSay reviews={reviewers} />
            <Chicago/>
        </main>
        <Footer/>
    </>;
};

export default Home;