import 'match-media-mock'

import { fireEvent, render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import galleryMock from './mock'

import Gallery, { SlickButtonFix } from '.'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />)

    const buttonOne = screen.getByRole('button', {
      name: /thumb - Gallery Image 1/i
    })
    expect(buttonOne).toHaveAttribute('src', galleryMock[0].src)

    const buttonTwo = screen.getByRole('button', {
      name: /thumb - Gallery Image 2/i
    })
    expect(buttonTwo).toHaveAttribute('src', galleryMock[1].src)
  })

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />)

    const modalElement = screen.getByLabelText('modal')

    expect(modalElement.getAttribute('aria-hidden')).toBe('true')
    expect(modalElement).toHaveStyle({ opacity: 0, 'pointer-events': 'none' })

    const thumb = screen.getByRole('button', {
      name: /thumb - Gallery Image 1/i
    })

    fireEvent.click(thumb)

    expect(modalElement.getAttribute('aria-hidden')).toBe('false')
    expect(modalElement).toHaveStyle({ opacity: 1 })
  })

  it('should handle close when overlay or button clicked', () => {
    renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />)

    const modalElement = screen.getByLabelText('modal')

    const thumb = screen.getByRole('button', {
      name: /thumb - Gallery Image 1/i
    })

    fireEvent.click(thumb)

    expect(modalElement.getAttribute('aria-hidden')).toBe('false')
    expect(modalElement).toHaveStyle({ opacity: 1 })

    const closeModalButton = screen.getByRole('button', {
      name: /close modal/i
    })

    fireEvent.click(closeModalButton)

    expect(modalElement.getAttribute('aria-hidden')).toBe('true')
    expect(modalElement).toHaveStyle({ opacity: 0 })
  })

  it('should handle close when Escape key is pressed', () => {
    const { container } = renderWithTheme(
      <Gallery items={galleryMock.slice(0, 2)} />
    )

    const modalElement = screen.getByLabelText('modal')

    fireEvent.keyUp(container, { key: 'Escape' })

    expect(modalElement.getAttribute('aria-hidden')).toBe('true')
    expect(modalElement).toHaveStyle({ opacity: 0 })
  })

  it('should render the util SlickButtonFix', () => {
    render(
      <SlickButtonFix>
        <span>children</span>
      </SlickButtonFix>
    )

    const children = screen.getByText('children')
    expect(children).toBeInTheDocument()
  })

  it('should open modal with selected image', async () => {
    renderWithTheme(<Gallery items={galleryMock.slice(0, 2)} />)

    const thumb = screen.getByRole('button', {
      name: /thumb - Gallery Image 1/i
    })

    fireEvent.click(thumb)

    const image = await screen.findByRole('img', { name: /Gallery Image 1/i })
    expect(image.parentElement?.parentElement).toHaveClass('slick-active')
  })
})
