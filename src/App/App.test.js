import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'

describe('App', () => {
  // the reason I did not use a beforeEach is because we will need to test the App in different views (logged in/out, manager, guest)

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
   expect(welcomeImages).toHaveLength(8);
   // should this be more specific and not use getAllBy to check header links?? 9 imgs was a lot to test for
  })

  it("should render login form when Login link is clicked", () => {
   const { getByRole } = render(<MemoryRouter> <App /></MemoryRouter>)
   const loginLink = screen.getByRole("link", { name: "Login" })
  //  check login link in header
   fireEvent.click(loginLink);
   // go to log in login page
   // render login form
   expect(screen.getByPlaceholderText("Username")).toBeInTheDocument()
   const loginFormBtn = screen.getByRole("button", { name: "Login" })
  });


})