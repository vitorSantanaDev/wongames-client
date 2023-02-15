import Link from 'next/link'
import { Fragment, useState } from 'react'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'

import { MenuProps } from './types'

import Logo from 'components/Logo'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleMenu = () => setIsOpen((prevState) => !prevState)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper>
          <MenuIcon onClick={handleToggleMenu} aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>
      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>
      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping cart" />
        </S.IconWrapper>
        {!username && (
          <MediaMatch greaterThan="medium">
            <Link href="/sign-in" passHref>
              <Button as="a" size="medium">
                Sign in
              </Button>
            </Link>
          </MediaMatch>
        )}
      </S.MenuGroup>
      <S.MenuFull isOpen={isOpen} aria-hidden={!isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={handleToggleMenu} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>

          {!!username && (
            <Fragment>
              <S.MenuLink href="#" title="My account">
                My account
              </S.MenuLink>
              <S.MenuLink href="#" title="Wishlist">
                Wishlist
              </S.MenuLink>
            </Fragment>
          )}
        </S.MenuNav>
        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref>
              <Button fullWidth size="large" as="a">
                Log in now
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <S.CreateAccount title="Sign Up">Sign Up</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
