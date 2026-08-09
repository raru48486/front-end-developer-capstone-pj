import BookingForm from "../components/bookingForm";
import { useReducer } from 'react';
import { fetchAPI } from "../api";

export const updateTimes = (_, action) => {
    return fetchAPI(action);
};
export const initializeTimes = () => {
    return fetchAPI(new Date());
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
    </>;
};

export default Reservations;