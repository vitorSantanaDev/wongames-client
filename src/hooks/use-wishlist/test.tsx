import { ReactNode } from 'react'
import { useWishlist, WishListProvider } from '.'
import { MockedProvider } from '@apollo/client/testing'
import { renderHook } from '@testing-library/react-hooks'
import {
  createWishlistMock,
  removeWishlistMock,
  updateWishlistMock,
  wishlistItems,
  wishlistMock
} from './mock'
import { act, waitFor } from '@testing-library/react'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const session = { jwt: 'auth-token', user: { email: 'mock@email.com' } }

useSession.mockImplementation(() => [session])

describe('useWishlist', () => {
  it('should return wishlist items', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MockedProvider showWarnings={false} mocks={[wishlistMock]}>
        <WishListProvider>{children}</WishListProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })

    expect(result.current.loading).toBe(true)

    await waitForNextUpdate()

    expect(result.current.items).toStrictEqual([
      wishlistItems[0],
      wishlistItems[1]
    ])
  })

  it('should check if the game is in the wishlist', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MockedProvider showWarnings={false} mocks={[wishlistMock]}>
        <WishListProvider>{children}</WishListProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })

    await waitForNextUpdate()

    expect(result.current.isInWishlist('1')).toBe(true)
    expect(result.current.isInWishlist('2')).toBe(true)
    expect(result.current.isInWishlist('3')).toBe(false)
  })

  it('should add item in wishlist creating a new list', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MockedProvider showWarnings={false} mocks={[createWishlistMock]}>
        <WishListProvider>{children}</WishListProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })

    act(() => {
      result.current.addToWishlist('3')
    })

    await waitForNextUpdate()

    expect(result.current.items).toStrictEqual([wishlistItems[2]])
  })

  it('should add item in wishlist updating the current list', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MockedProvider
        showWarnings={false}
        mocks={[wishlistMock, updateWishlistMock]}
      >
        <WishListProvider>{children}</WishListProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })
    // wait for the data to load
    await waitForNextUpdate()

    act(() => {
      result.current.addToWishlist('3')
    })

    await waitFor(() => {
      expect(result.current.items).toStrictEqual(wishlistItems)
    })
  })

  it('should remove item from wishlist and updating the current list', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MockedProvider
        showWarnings={false}
        mocks={[wishlistMock, removeWishlistMock]}
      >
        <WishListProvider>{children}</WishListProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })
    // wait for the data to load
    await waitForNextUpdate()

    act(() => {
      result.current.removeFromWishlist('1')
    })

    await waitFor(() => {
      expect(result.current.items).toStrictEqual([wishlistItems[1]])
    })
  })
})
