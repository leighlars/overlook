import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'

describe('App', () => {
  it('should render a header always', () => {
    const {getByRole, getAllByRole} = render(<MemoryRouter><App/></MemoryRouter>)
    const logo = screen.getByRole('heading', {name: 'The Overlook'})
    const navLinks = screen.getAllByRole('link')
    expect(logo).toBeInTheDocument()
    expect(navLinks).toHaveLength(4)
    // should make this more specific and not use getAllBy to check header
  })

  it('should render a landing page if not logged in', () => {
   const { getByRole, getAllByRole } = render(<MemoryRouter> <App /></MemoryRouter>);
   const welcomeText = screen.getByRole("heading", { name: "Home" });
   const welcomeImages = screen.getAllByRole("img");
   expect(welcomeText).toBeInTheDocument();
   expect(welcomeImages).toHaveLength(9);
   // should make this more specific and not use getAllBy to check header
  })


})