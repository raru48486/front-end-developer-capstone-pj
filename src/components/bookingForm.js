import './bookingForm.css';
import { useState } from 'react';
import { submitAPI } from '../api';

const BookingForm = ({ availableTimes, setAvailableTimes, onSubmit }) => {
    const now = new Date();
    const today = `${now.getFullYear()}-${(now.getMonth() + 1).toString(10).padStart(2, "0")}-${now.getDate().toString(10).padStart(2, "0")}`;
    const occasions = ["Birthday", "Anniversary"];

    const [date, setDate] = useState(today);
    const [resTime, setResTime] = useState(availableTimes[0]);
    const [numGuests, setNumGuests] = useState(1);
    const [occasion, setOccasion] = useState(occasions[0]);

    const handleResDateChange = (e) => {
        setDate(e.target.value);
        setAvailableTimes({ type: "UPDATE_TIMES", date: new Date(e.target.value) });
    };

    const timeOptions = availableTimes.map((t, i) => {
        return <option key={i} value={t}>{t}</option>;
    });
    const occationOptions = occasions.map((o, i) => {
        return <option key={i} value={o}>{o}</option>;
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const state = {
            date,
            resTime,
            numGuests,
            occasion,
        };
        if (submitAPI(state)) {
            onSubmit(state);
        } else {
            alert("We encountered a server-side error while processing your reservation. Please try again later.");
        }
    };

    return <section className='booking-form container-grid'>
        <h2 className='sub-title'>Reserve a Table</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} min={today} onChange={handleResDateChange} required />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" onChange={(e) => setResTime(e.target.value)} required>
                {timeOptions}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={numGuests} onChange={(e) => setNumGuests(e.target.value)} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={(e) => setOccasion(e.target.value)} required>
                {occationOptions}
            </select>
            <button type="submit" aria-label="On Click">Make Your reservation</button>
        </form>
    </section>;
};

export default BookingForm;