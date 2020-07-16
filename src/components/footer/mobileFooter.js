import React from 'react'
import {
  MobileContainer,
  MobileNavFooter,
  MobileSocialMedia,
  MobileLogoFooter,
  MobileSignNews,
  Facebook,
  Instagram,
  Pintrest,
  Vtex,
  Selo,
  NavMobile,
  MobileTitle,
  MobileNameBox,
  MobileEmailBox,
  EmailFill,
  Button,
} from './style'
import { InfosFooter } from 'components'
import facebook from 'assets/facebook.png'
import instagram from 'assets/instagram.png'
import pintrest from 'assets/pintrest.png'
import vtex from 'assets/vtex-pci-200.png'
import selo from 'assets/selo-ebit.png'

export function MobileFooter() {
  return (
    <MobileContainer>
      <MobileNavFooter>
        <InfosFooter />
      </MobileNavFooter>
      <MobileSocialMedia>
        <Facebook src={facebook} alt="" />
        <Instagram src={instagram} alt="" />
        <Pintrest src={pintrest} alt="" />
      </MobileSocialMedia>
      <MobileLogoFooter>
        <Vtex src={vtex} alt="" />
        <Selo src={selo} alt="" />
      </MobileLogoFooter>
      <MobileSignNews>
        <MobileTitle>Assine nossas news</MobileTitle>
        <MobileNameBox>
          <span>Nome</span>
          <input type="Text" placeholder="nome" />
        </MobileNameBox>
        <MobileEmailBox>
          <EmailFill>
            <input type="E-mail" placeholder="e-mail" />
          </EmailFill>
          <Button>
            <p>Enviar</p>
          </Button>
        </MobileEmailBox>
      </MobileSignNews>
    </MobileContainer>
  )
}
