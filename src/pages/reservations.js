import BookingForm from "../components/bookingForm";
import Footer from "../components/footer";
import { useReducer } from 'react';

export const updateTimes = (state, action) => {
    return state;
};
export const initializeTimes = () => {
    return [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ];
}

const Main = () => {
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, null, initializeTimes);
    return <>
        <main>
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
        </main>
    </>;
};

const Reservations = () => {
    return <>
        <Main />
        <Footer />
    </>;
};

export default Reservations;