import BookingForm from "../components/bookingForm";
import Footer from "../components/footer";

const Main = () => {
    return <>
        <main>
            <BookingForm />
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