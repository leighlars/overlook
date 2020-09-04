import React from 'react'
import Login from "./Login";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe('Login', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>)
  })

  it('should render a login welcome text', () => {
    const header1 = screen.getByRole('heading', {name: 'Relax, or Adventure'})
    const header2 = screen.getByRole('heading', {name: 'The choice is yours.'})
    expect(header1).toBeInTheDocument()
    expect(header2).toBeInTheDocument()

  })

  it('should render a login form', () => {
    const usernameInput = screen.getByPlaceholderText('Username')
    const passwordInput = screen.getByPlaceholderText("Password");
    const loginBtn = screen.getByRole('button', {name: 'Login'})

    expect(usernameInput).toBeInTheDocument()
    expect(usernameInput).toBeInTheDocument()
    expect(loginBtn).toBeInTheDocument()
  })

  xit('should fire an event when login button is clicked', () => {
    const loginBtn = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginBtn)
    expect(mockLogin).toBeCalledTimes(1)
    // not working bc we don't have func'y set up for this, test shell. 
  })


})