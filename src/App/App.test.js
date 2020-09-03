import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  beforeEach(() => {
    render(<MemoryRouter><App/></MemoryRouter>)
  })

  it('should render a header always', () => {
    const logo = screen.getByRole('heading', {name: 'The Overlook'})
    const navLinks = screen.getAllByRole('link')
    expect(logo).toBeInTheDocument()
    expect(navLinks).toHaveLength(4)
  })

  it('should render a landing page', () => {
    const welcomeText = screen.getByRole('heading', {name: "Home"})
    const welcomeImages = screen.getAllByRole('img')
    expect(welcomeText).toBeInTheDocument()
    expect(welcomeImages).toHaveLength(6)
  })


})