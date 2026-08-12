import BookingForm from "./bookingForm";
import { initializeTimes, updateTimes } from "../pages/reservations";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

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