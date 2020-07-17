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
  MobileMenuNav,
  CloseMenu,
  MenuShowContainer,
} from './styles'
import Logo from 'assets/logo.jpg'
import Search from 'assets/icon-search.png'
import Bag from 'assets/icon-mobile-bag.png'
import { MobileRightModal } from '../modalRightSide/mobileIndex'

export function MobileHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [mobileModalOpen, setMobileModalOpen] = React.useState(false)
  const menuInfos = [
    'Entrar',
    'Cadastrar-se',
    'Sapatos',
    'Bolsas',
    'Acessórios',
    'Off',
  ]
  const handleMenuClick = () => {
    return setMenuOpen(!menuOpen)
  }

  const handleMobileModalClick = () => {
    return setMobileModalOpen(true)
  }
  return (
    <MobileContainer>
      <MobileMenu onClick={handleMenuClick}>
        <One />
        <Two />
        <Three />
        {menuOpen && (
          <MenuShowContainer>
            <MobileMenuNav>
              {menuInfos.map((category) => (
                <li>{category}</li>
              ))}
            </MobileMenuNav>
            <CloseMenu>
              <p>X</p>
            </CloseMenu>
          </MenuShowContainer>
        )}
      </MobileMenu>
      <MobileLogo>
        <img src={Logo} alt="" />
      </MobileLogo>
      <MobileIcons>
        <MobileSearch src={Search} alt="" />
        <MobileBag src={Bag} alt="" onClick={handleMobileModalClick} />
        {mobileModalOpen ? (
          <MobileRightModal setMobileModalOpen={setMobileModalOpen} />
        ) : null}
      </MobileIcons>
    </MobileContainer>
  )
}
