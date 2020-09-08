import React from 'react'
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Header from './Header'
 

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

  it('should hide Logout link when not logged in', () => { 
    const logoutLink = screen.getByRole('link', {name: "Logout"})
    expect(logoutLink.className).toBe('hidden active')
  })

  
})

