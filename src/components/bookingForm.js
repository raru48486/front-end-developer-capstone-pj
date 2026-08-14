import './bookingForm.css';
import { useState } from 'react';
import { submitAPI } from '../api'; // Import API functions

const BookingForm = ({ availableTimes, setAvailableTimes, onSubmit }) => {
    // Get today's date in YYYY-MM-DD format
    const now = new Date();
    const today = `${now.getFullYear()}-${(now.getMonth() + 1).toString(10).padStart(2, "0")}-${now.getDate().toString(10).padStart(2, "0")}`;
    // Array of available occasions for the user to choose from
    const occasions = ["Birthday", "Anniversary"];
    const minGuests = 1;
    const maxGuests = 10;

    // State variables using useState hook to manage form input values:
    const [date, setDate] = useState(today);
    const [resTime, setResTime] = useState(availableTimes[0]); // Default time selection
    const [numGuests, setNumGuests] = useState(1); // Default number of guests
    const [occasion, setOccasion] = useState(occasions[0]); // Default occasion selection

    // Function to handle chanes in the selected date
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

    // Function to handle form submit.
    const handleSubmit = (e) => {
        e.preventDefault();
        if (new Date(`${date} ${resTime}`).getTime() < new Date().getTime()) {
            alert("Reservations cannot be made for dates in the past. Please select a future date.");
            return;
        }
        if (numGuests < minGuests || numGuests > maxGuests) {
            alert("The maximum number of guests allowed for this reservation is 10.");
            return;
        }
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
            <input type="number" placeholder={minGuests} min={minGuests} max={maxGuests} id="guests" value={numGuests} onChange={(e) => setNumGuests(e.target.value)} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={(e) => setOccasion(e.target.value)} required>
                {occationOptions}
            </select>
            <button type="submit" aria-label="On Click">Make Your reservation</button>
        </form>
    </section>;
};

export default BookingForm;