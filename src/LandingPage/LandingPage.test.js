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
    const greeting = screen.getByRole('heading', {name: 'Home'})
    const images = screen.getAllByAltText('hotel with mountain')
    expect(greeting).toBeInTheDocument()
    expect(images).toHaveLength(6)
  })

})