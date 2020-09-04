import React from 'react'
import Manager from "./Manager";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe('Manager', () => {
  beforeEach(() => {
    render(
     <MemoryRouter>
      <Manager
       users={[
        {
         id: 1,
         name: "Leatha Ullrich",
        },
        {
         id: 2,
         name: "Rocio Schuster",
        },
        {
         id: 3,
         name: "Kelvin Schiller",
        },
       ]}
       bookings={[
        {
         id: "5fwrgu4i7k55hl6sz",
         userID: 9,
         date: "2020/04/22",
         roomNumber: 15,
         roomServiceCharges: [],
        },
        {
         id: "5fwrgu4i7k55hl6t5",
         userID: 43,
         date: "2020/01/24",
         roomNumber: 24,
         roomServiceCharges: [],
        },
        {
         id: "5fwrgu4i7k55hl6t6",
         userID: 13,
         date: "2020/01/10",
         roomNumber: 12,
         roomServiceCharges: [],
        },
       ]}
       rooms={[
        {
         number: 1,
         roomType: "residential suite",
         bidet: true,
         bedSize: "queen",
         numBeds: 1,
         costPerNight: 358.4,
        },
        {
         number: 2,
         roomType: "suite",
         bidet: false,
         bedSize: "full",
         numBeds: 2,
         costPerNight: 477.38,
        },
        {
         number: 3,
         roomType: "single room",
         bidet: false,
         bedSize: "king",
         numBeds: 1,
         costPerNight: 491.14,
        },
       ]}
       error={"Oops!"}
      />
     </MemoryRouter>
    );
  })

  it('should render daily stats', () => {
    const availableRooms = screen.getByText("Rooms Available: 10")
    const percentOccupied = screen.getByText("Occupied Rooms: 50%")
    const revenue = screen.getByText("Today's Revenue: $100")

    expect(availableRooms).toBeInTheDocument()
    expect(percentOccupied).toBeInTheDocument();
    expect(revenue).toBeInTheDocument();
  })

})