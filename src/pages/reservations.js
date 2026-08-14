import BookingForm from "../components/bookingForm";
import { useReducer } from 'react';
import { fetchAPI } from "../api";
import { useNavigate } from 'react-router-dom';


export const updateTimes = (_, { type, date }) => {
    if (type === "UPDATE_TIMES") {
        return fetchAPI(date);
    }
};
export const initializeTimes = () => {
    return fetchAPI(new Date());
}

const Main = () => {
    // useNavigate hook to route BookingFrom to Confirm.
    const navigate = useNavigate();
    // create reducer to manage available time.
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, null, initializeTimes);

    // Function to handle submit
    const handleSubmit = (state) => {
        navigate("/confirm", {
            state
        });
    };

    return <>
        <main>
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} onSubmit={handleSubmit} />
        </main>
    </>;
};

const Reservations = () => {
    return <>
        <Main />
    </>;
};

export default Reservations;