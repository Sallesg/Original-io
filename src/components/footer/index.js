import * as React from 'react'
import {
  Line,
  SocialMedia,
  Facebook,
  Pintrest,
  Instagram,
  SectionFooter,
  LogosSection,
  Vtex,
  Selo,
  FooterInfosSection,
  FooterBar,
  Text,
  Logo,
  News,
  Send,
  ContainerNews,
  WrapperFooter,
} from './style'
import { MobileFooter } from './mobileFooter'
import logo from 'assets/logoFooter.png'
import facebook from 'assets/facebook.png'
import instagram from 'assets/instagram.png'
import pintrest from 'assets/pintrest.png'
import vtex from 'assets/vtex-pci-200.png'
import selo from 'assets/selo-ebit.png'

export function Footer() {
  const footerCategories = ['Institucional', 'A marca', 'Lojas', 'Contato']
  const footerCategoriesInfos = [
    'Informações',
    'Fomas de Pagamentos',
    'Trocas e Devoluções',
    'Cuidados com o Produto',
  ]
  const footerCategoriesKnow = [
    'Conheça',
    'Franquias e Multimarcas',
    'Trabalhe com a Gente',
    'Procon-RJ',
  ]

  return (
    <>
      <Line />
      <MobileFooter />
      <WrapperFooter>
        <SectionFooter>
          <SocialMedia>
            <Facebook src={facebook} alt="facebook" />
            <Instagram src={instagram} alt="instagram" />
            <Pintrest src={pintrest} alt="pintrest" />
          </SocialMedia>
          <LogosSection>
            <Vtex src={vtex} alt="" />
            <Selo src={selo} alt="" />
          </LogosSection>
        </SectionFooter>
        <FooterInfosSection>
          <ul>
            {footerCategories.map((footerCategory) => (
              <li>{footerCategory}</li>
            ))}
          </ul>
          <ul>
            {footerCategoriesInfos.map((footerCategoryInfos) => (
              <li>{footerCategoryInfos}</li>
            ))}
          </ul>
          <ul>
            {footerCategoriesKnow.map((footerCategoryKnow) => (
              <li>{footerCategoryKnow}</li>
            ))}
          </ul>
        </FooterInfosSection>
        <ContainerNews>
          <News>
            <h1>Assine Nossa News</h1>
            <div>
              <span>Nome</span>
              <input type="Text" placeholder="nome" />
              <input type="e-mail" placeholder="E-mail" />
            </div>
            <Send>
              <p>Enviar</p>
            </Send>
          </News>
        </ContainerNews>
      </WrapperFooter>
      <FooterBar>
        <Text>
          <p>
            Via Mia | V. Milano Centro Comércio de Bolsas Eirelli -EPP. <br />
            Av. das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio
            de Janeiro - RJ - CEP: 22640-100 <br />
            CNPJ: 05.292.288/0002-10 - I-E: 86.732.548 - E-mail:
            ecommerce@viamia.com.br
          </p>
        </Text>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
      </FooterBar>
    </>
  )
}
