import Link from 'next/link'
import { signOut } from 'next-auth/client'

import {
  ExitToApp,
  AccountCircle,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular'

import Dropdown from 'components/Dropdown'

import { UserDropdownProps } from './types'

import * as S from './styles'

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <S.Username>
        <AccountCircle size={24} /> {username} <ChevronDown size={24} />
      </S.Username>
    }
  >
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link>
          <AccountCircle />
          <span>My Profile</span>
        </S.Link>
      </Link>

      <Link href="/wishlist" passHref>
        <S.Link title="Wishlist">
          <FavoriteBorder />
          <span>Wishlist</span>
        </S.Link>
      </Link>

      <S.Link role="button" onClick={() => signOut()} title="Sign out">
        <ExitToApp />
        <span>Sign out</span>
      </S.Link>
    </S.Nav>
  </Dropdown>
)

export default UserDropdown
