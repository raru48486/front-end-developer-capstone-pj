import BookingForm from "./bookingForm";
import { initializeTimes, updateTimes } from "../pages/reservations";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Test for component rendering functionality', () => {
    test("Booking Form", () => {
        const mockAvailableTimes = ["17:00", "18:00", "19:00",];
        const mockSetAvailableTimes = jest.fn();
        render(<BookingForm availableTimes={mockAvailableTimes} setAvailableTimes={mockSetAvailableTimes} />);

        const a = screen.getByText("Reserve a Table");
        const b = screen.getByText("Choose date");
        const c = screen.getByText("Choose time");
        const d = screen.getByText("Number of guests");
        const e = screen.getByText("Occasion");
        const f = screen.getByText("Birthday");
        const g = screen.getByText("Anniversary");
        const h = screen.getByText("Make Your reservation");

        expect(a).toBeInTheDocument();
        expect(b).toBeInTheDocument();
        expect(c).toBeInTheDocument();
        expect(d).toBeInTheDocument();
        expect(e).toBeInTheDocument();
        expect(f).toBeInTheDocument();
        expect(g).toBeInTheDocument();
        expect(h).toBeInTheDocument();
    });
});

describe("Test for reducer functions", () => {
    test("initializeTime", () => {
        const result = initializeTimes();
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBeGreaterThan(0);

    });

    test("updateTimes", () => {
        const result = updateTimes(undefined, { type: "UPDATE_TIMES", date: new Date("2026-01-01") });
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBeGreaterThan(0);
    });
});

describe('Test for HTML5 validation', () => {
    test("valid", () => {
        const mockAvailableTimes = ["17:00", "18:00", "19:00",];
        const mockSetAvailableTimes = jest.fn();
        const handleSubmit = jest.fn();
        render(<BookingForm availableTimes={mockAvailableTimes} setAvailableTimes={mockSetAvailableTimes} onSubmit={handleSubmit} />);
        const submit = screen.getByText("Make Your reservation");
        fireEvent.click(submit);
        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    test("invalid", () => {
        const mockAvailableTimes = ["17:00", "18:00", "19:00",];
        const mockSetAvailableTimes = jest.fn();
        const handleSubmit = jest.fn();
        render(<BookingForm availableTimes={mockAvailableTimes} setAvailableTimes={mockSetAvailableTimes} onSubmit={handleSubmit} />);

        const resdate = screen.getByLabelText(/choose date/i);
        const restime = screen.getByLabelText(/choose time/i);
        const guests = screen.getByLabelText(/number of guests/i);

        fireEvent.change(resdate, { target: { value: "" } });
        fireEvent.change(restime, { target: { value: "" } });
        fireEvent.change(guests, { target: { value: "0" } });

        expect(resdate.checkValidity()).toBe(false);
        expect(restime.checkValidity()).toBe(false);
        expect(guests.checkValidity()).toBe(false);
    });
});

describe('Test for BookingForm validation', () => {
    test("future date", () => {
        window.alert = jest.fn();
        const timeToRes = new Date(new Date().getTime() + 48 * 60 * 60 * 1000); // add 48 hours
        const date = `${timeToRes.getFullYear()}-${(timeToRes.getMonth() + 1).toString().padStart(2, "0")}-${timeToRes.getDate().toString().padStart(2, "0")}`;
        const mockAvailableTimes = ["17:00", "18:00", "19:00",];
        const mockSetAvailableTimes = jest.fn();
        const handleSubmit = jest.fn();
        render(<BookingForm availableTimes={mockAvailableTimes} setAvailableTimes={mockSetAvailableTimes} onSubmit={handleSubmit} />);
        const submit = screen.getByText("Make Your reservation");
        const resdate = screen.getByLabelText(/choose date/i);
        fireEvent.change(resdate, { target: { value: date } });
        fireEvent.click(submit);
        expect(window.alert).toHaveBeenCalledTimes(0);
    });

    test("future time", () => {
        window.alert = jest.fn();
        const timeToRes = new Date(new Date().getTime() + 60 * 60 * 1000); // add an hour
        const time = `${timeToRes.getHours().toString().padStart(2, "0")}:${timeToRes.getMinutes().toString().padStart(2, "0")}`;
        const mockAvailableTimes = [time, "17:00", "18:00", "19:00",];
        const mockSetAvailableTimes = jest.fn();
        const handleSubmit = jest.fn();
        render(<BookingForm availableTimes={mockAvailableTimes} setAvailableTimes={mockSetAvailableTimes} onSubmit={handleSubmit} />);
        const submit = screen.getByText("Make Your reservation");
        fireEvent.click(submit);
        expect(window.alert).toHaveBeenCalledTimes(0);
    });

    test("past date", () => {
        window.alert = jest.fn();
        const timeToRes = new Date(new Date().getTime() - 48 * 60 * 60 * 1000); // substract 48 hours
        const date = `${timeToRes.getFullYear()}-${(timeToRes.getMonth() + 1).toString().padStart(2, "0")}-${timeToRes.getDate().toString().padStart(2, "0")}`;
        const mockAvailableTimes = ["17:00", "18:00", "19:00",];
        const mockSetAvailableTimes = jest.fn();
        const handleSubmit = jest.fn();
        render(<BookingForm availableTimes={mockAvailableTimes} setAvailableTimes={mockSetAvailableTimes} onSubmit={handleSubmit} />);
        const submit = screen.getByText("Make Your reservation");
        const resdate = screen.getByLabelText(/choose date/i);
        fireEvent.change(resdate, { target: { value: date } });
        fireEvent.click(submit);
        expect(window.alert).toHaveBeenCalledTimes(1);
    });

    test("past time", () => {
        window.alert = jest.fn();
        const timeToRes = new Date(new Date().getTime() - 60 * 60 * 1000); // substract an hour
        const date = `${timeToRes.getFullYear()}-${(timeToRes.getMonth() + 1).toString().padStart(2, "0")}-${timeToRes.getDate().toString().padStart(2, "0")}`;
        const time = `${timeToRes.getHours().toString().padStart(2, "0")}:${timeToRes.getMinutes().toString().padStart(2, "0")}`;
        const mockAvailableTimes = [time, "17:00", "18:00", "19:00",];
        const mockSetAvailableTimes = jest.fn();
        const handleSubmit = jest.fn();
        render(<BookingForm availableTimes={mockAvailableTimes} setAvailableTimes={mockSetAvailableTimes} onSubmit={handleSubmit} />);
        const resdate = screen.getByLabelText(/choose date/i);
        fireEvent.change(resdate, { target: { value: date } });
        const submit = screen.getByText("Make Your reservation");
        fireEvent.click(submit);
        expect(window.alert).toHaveBeenCalledTimes(1);
    });

    test("num guests", () => {
        window.alert = jest.fn();
        const mockAvailableTimes = ["17:00", "18:00", "19:00",];
        const mockSetAvailableTimes = jest.fn();
        const handleSubmit = jest.fn();
        render(<BookingForm availableTimes={mockAvailableTimes} setAvailableTimes={mockSetAvailableTimes} onSubmit={handleSubmit} />);
        const numGuests = screen.getByLabelText(/number of guests/i);
        const submit = screen.getByText("Make Your reservation");
        fireEvent.change(numGuests, { target: { value: 5 }});
        fireEvent.click(submit);
        expect(window.alert).toHaveBeenCalledTimes(0);
    });

    test("min guests", () => {
        window.alert = jest.fn();
        const mockAvailableTimes = ["17:00", "18:00", "19:00",];
        const mockSetAvailableTimes = jest.fn();
        const handleSubmit = jest.fn();
        render(<BookingForm availableTimes={mockAvailableTimes} setAvailableTimes={mockSetAvailableTimes} onSubmit={handleSubmit} />);
        const numGuests = screen.getByLabelText(/number of guests/i);
        const submit = screen.getByText("Make Your reservation");
        fireEvent.change(numGuests, { target: { value: 0 }});
        fireEvent.click(submit);
        expect(window.alert).toHaveBeenCalledTimes(1);
    })

    test("max guests", () => {
        window.alert = jest.fn();
        const mockAvailableTimes = ["17:00", "18:00", "19:00",];
        const mockSetAvailableTimes = jest.fn();
        const handleSubmit = jest.fn();
        render(<BookingForm availableTimes={mockAvailableTimes} setAvailableTimes={mockSetAvailableTimes} onSubmit={handleSubmit} />);
        const numGuests = screen.getByLabelText(/number of guests/i);
        const submit = screen.getByText("Make Your reservation");
        fireEvent.change(numGuests, { target: { value: 11 }});
        fireEvent.click(submit);
        expect(window.alert).toHaveBeenCalledTimes(1);
    })
});