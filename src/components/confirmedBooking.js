import './confirmedBooking.css';

const ConfirmedBooking = ({ state }) => {
    const {
        date,
        resTime,
        numGuests,
        occasion,
    } = state;
    return <>
        <section className="confirmed-booking container-grid">
            <h2 className="sub-title">Reservation Confirmed!</h2>
            <div className='booking'>
                <div className="field">Date</div><div className="value">{date}</div>
                <div className="field">Time</div><div className="value">{resTime}</div>
                <div className="field">Guests</div><div className="value">{numGuests}</div>
                <div className="field">Occasion</div><div className="value">{occasion}</div>
            </div>
        </section>
    </>
};

export default ConfirmedBooking;
