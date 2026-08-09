import ConfirmedBooking from "../components/confirmedBooking";
import { useLocation } from "react-router-dom";

const Main = () => {
    const location = useLocation();
    const { state } = location;
    return <>
        <main>
            <ConfirmedBooking state={state} />
        </main>
    </>;
};

const Confirm = () => {
    return <>
        <Main />
    </>;
};

export default Confirm;
