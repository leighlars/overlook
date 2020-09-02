import React from 'react'
import { render, screen, fireEvent } from "@testing-library/react";
import Header from './Header'
 

describe('Header', () => {
  beforeEach(() => {
    render(<Header />)
  })
  it('should render The Overlook logo', () => {
    const logo = screen.getByText('The Overlook')
    expect(logo).toBeInTheDocument()
  })
})

