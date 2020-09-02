import React from 'react'
import { render, screen, fireEvent } from "@testing-library/react";
import Header from './Header'
import { MemoryRouter } from 'react-router-dom';
 

describe('Header', () => {
  beforeEach(() => {
    render(
    <MemoryRouter>
      <Header 
      isLoggedIn={false}/>
    </MemoryRouter>)
  })

  
  it('should render The Overlook logo', () => {
    const logo = screen.getByText('The Overlook')
    expect(logo).toBeInTheDocument()
  })

  it('should render the Home link on load', () => {
    const homeLink = screen.getByRole('link', {name: 'Home'})
    expect(homeLink).toBeInTheDocument()
  })

  it('should render the Login link on load', () => {
   const loginLink = screen.getByRole('link', { name: "Login" });
   expect(loginLink).toBeInTheDocument()
  })
})

