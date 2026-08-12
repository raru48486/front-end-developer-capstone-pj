import BookingForm from "../components/bookingForm";
import { useReducer } from 'react';
import { fetchAPI } from "../api";

export const updateTimes = (_, { type, date }) => {
    if (type === "UPDATE_TIMES") {
        return fetchAPI(date);
    }
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