import BookingForm from "./bookingForm";
import { initializeTimes, updateTimes } from "../pages/reservations";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

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
    const i = screen.getByText("17:00");
    const j = screen.getByText("18:00");
    const k = screen.getByText("19:00");

    expect(a).toBeInTheDocument();
    expect(b).toBeInTheDocument();
    expect(c).toBeInTheDocument();
    expect(d).toBeInTheDocument();
    expect(e).toBeInTheDocument();
    expect(f).toBeInTheDocument();
    expect(g).toBeInTheDocument();
    expect(h).toBeInTheDocument();
    expect(i).toBeInTheDocument();
    expect(j).toBeInTheDocument();
    expect(k).toBeInTheDocument();
});

test("initializeTime", () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00",];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);

});

test("updateTimes", () => {
    const expectedTimes = ["17:00", "18:00", "19:00"];
    const result = updateTimes(["17:00", "18:00", "19:00"], "2026-01-01");
    expect(result).toEqual(expectedTimes);
});