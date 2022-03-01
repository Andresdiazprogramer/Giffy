import React from 'react';
import { render, waitForElement, fireEvent, screen } from '@testing-library/react';
import App from '../App';

test('home work as expected', async () => {
  const { container } = render(<App />)
  const gefLink = await waitForElement(
      ()=> container.querySelector('.Gif-link')
  )
  expect(gefLink).toBeInTheDocument()
})

test('should first',async () => { 
    render(<App/>)
    const input = await screen.findByRole('textboxx')
    const button = await screen.findByRole('button')
    
    fireEvent.change(input,{target: {value:'matrix'}})
    fireEvent.click(button)

    const title = await screen.findByText('matrix')
    expect(title).toBeVisible()

 })
