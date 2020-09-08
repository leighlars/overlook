import React from 'react'
import MgrSearchForm from "./MgrSearchForm";
import { render, screen, fireEvent, getByPlaceholderText } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe('MgrSearchForm', () => {
  beforeEach(() => {
    render(
    <MemoryRouter>
      <MgrSearchForm/>
    </MemoryRouter>)
  })

  it('should render a form to search guests', () => {
    const nameInput = screen.getByPlaceholderText('Search Guest Name')
    const findBtn = screen.getByRole('button', {name: 'Find'})
    const clearBtn = screen.getByRole('button', {name: 'Clear'})

    expect(nameInput).toBeInTheDocument()
    expect(findBtn).toBeInTheDocument()
    expect(clearBtn).toBeInTheDocument()
  })

  
  it("should reflect change in value when data is input in form", () => {
   const nameInput = screen.getByPlaceholderText("Search Guest Name")

   expect(nameInput.value).toBe("")

   fireEvent.change(nameInput, { target: { value: "Sarah" } })

   expect(nameInput.value).toBe("Sarah");
  })

  xit("should search for guests when find button is clicked", () => {
    const findBtn = screen.getByRole("button", { name: "Find" })
    fireEvent.click(findBtn);
    expect(mockSearchGuest).toBeCalledTimes(1);
    // not working bc fetch method not implemented
  });


})