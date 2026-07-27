import './customerssay.css';
/**
 * @param {{reviews:{id:number, name:string, rating: number, image:string, review:string}[]}} param0
 */
const CustomersSay = ({ reviews }) => {
    const says = reviews.map((r) => {
        return <div className="review" key={r.id}>
            <h3 className="highlight-text">{r.rating}</h3>
            <img src={r.image} alt={r.name} />
            <span className="name">{r.name}</span>
            <p>{r.review}</p>
        </div>;
    });
    return <section className="customerssay container-grid">
        <h2 className="sub-title">Testimonials</h2>
        {says}
    </section>
};

export default CustomersSay;