import './chicago.css';
import m_and_a_a from '../images/Mario and Adrian A.jpg';
import m_and_a_b from '../images/Mario and Adrian b.jpg';

const Chicago = () => {
    return <section className='chicago container-grid'>
        <section>
            <h2 className='display-title'>Little Lemon</h2>
            <h3 className='sub-title'>Chicago</h3>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        </section>
        <img src={m_and_a_a} alt={"Mario and Adrian A"} />
        <img src={m_and_a_b} alt={"Mario and Adrian b"} />
    </section>;
};

export default Chicago;
