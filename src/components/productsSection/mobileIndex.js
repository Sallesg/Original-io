import React from 'react'
import handbag from 'assets/handbag.png'
import sandals from 'assets/sandals.png'
import {
  MobileContainer,
  Title,
  MobileImagesSection,
  PriceImage,
} from './styles'

export function MobileProductsSection() {
  return (
    <MobileContainer>
      <Title>
        <h1>Quem viu, viu também</h1>
      </Title>
      <MobileImagesSection>
        <PriceImage>
          <img src={handbag} alt="Imagem de bolsa de mão" />
          <h4>RS 204,90</h4>
          <p>Ou 6x de R$ 34,15</p>
        </PriceImage>
        <PriceImage>
          <img src={sandals} alt="imagem de sandálias" />
          <h4>RS 204,90</h4>
          <p>Ou 6x de R$ 34,15</p>
        </PriceImage>
      </MobileImagesSection>
    </MobileContainer>
  )
}
