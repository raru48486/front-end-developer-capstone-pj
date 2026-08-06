import './bookingForm.css';
import { useState } from 'react';

const BookingForm = () => {
    const times = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ];
    const now = new Date();

    const [availableTimes, setAvailableTimes] = useState(times);
    const [date, setDate] = useState(`${now.getFullYear()}-${now.getMonth().toString(10).padStart(2, "0")}-${now.getDate().toString(10).padStart(2, "0")}`);
    const [resTime, setResTime] = useState();
    const [numGuests, setNumGuests] = useState(1);
    const [occasion, setOccasion] = useState("Anniversary");

    const timeOptions = availableTimes.map((t) => {
        return <option>{t}</option>;
    })

    return <section className='booking-form container-grid'>
        <h2 className='sub-title'>Reserve a Table</h2>
        <form className="booking-form">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={resTime} onChange={(e) => setResTime(e.target.value)}>
                {timeOptions}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={numGuests} onChange={(e) => setNumGuests(e.target.value)} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button type="submit">Make Your reservation</button>
        </form>
    </section>;
};

export default BookingForm;
