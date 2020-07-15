import React from 'react'
import {
  MobileContainer,
  MobileMenu,
  MobileLogo,
  MobileIcons,
  One,
  Two,
  Three,
  MobileBag,
  MobileSearch,
} from './styles'
import Logo from 'assets/logo.jpg'
import Search from 'assets/icon-search.png'
import Bag from 'assets/icon-mobile-bag.png'

export function MobileHeader() {
  return (
    <MobileContainer>
      <MobileMenu>
        <One />
        <Two />
        <Three />
      </MobileMenu>
      <MobileLogo>
        <img src={Logo} alt="" />
      </MobileLogo>
      <MobileIcons>
        <MobileSearch src={Search} alt="" />
        <MobileBag src={Bag} alt="" />
      </MobileIcons>
    </MobileContainer>
  )
}
