import React from 'react'
import LandingPage from './LandingPage'
import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

describe('LandingPage', () => {
 beforeEach(() => {
  render(
    <MemoryRouter>
      <LandingPage />
    </MemoryRouter>)
 })

  it('should render a greeting text and array of images', () => {
    // how do we test for the larger welcoming text on landing page?
    const greeting = screen.getByRole('heading', {name: 'Home'})
    const images = screen.getAllByRole('img')
    expect(greeting).toBeInTheDocument()
    expect(images).toHaveLength(9)
  })

})