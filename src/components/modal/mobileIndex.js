import React from 'react'
import {
  MobileContainer,
  MobileTitle,
  MobileRefer,
  ImageMobile,
  MobileColor,
  MobileColorContainer,
  MobileSize,
  MobileSizeContainer,
  MobileShopPrice,
  PriceContainer,
  ButtonAdd,
  MobileDescription,
} from './styles'
import { ButtonsColors, SelectSizeContainer } from 'components'
import ImageForMobile from 'assets/shoesBigImg.jpg'
import { MobileShowModal } from '../showModal/mobileModal'

export function MobileModel() {
  const [colors] = React.useState([
    {
      name: 'Fucsia',
      color: '#A9095E',
    },
    {
      name: 'Blue',
      color: '#2A5A75',
    },
    {
      name: 'Brow',
      color: '#A14830',
    },
    {
      name: 'Black',
      color: '#000000',
    },
  ])

  const [sizes] = React.useState([
    {
      name: '33',
    },
    {
      name: '34',
    },
    {
      name: '35',
    },
    {
      name: '36',
    },
    {
      name: '37',
    },
    {
      name: '38',
    },
    {
      name: '39',
    },
    {
      name: '40',
    },
  ])

  const [mobileModalOpen, setMobileModalOpen] = React.useState(false)
  const handleMobileModalClick = () => {
    return setMobileModalOpen(true)
  }

  const [activeColor, setActiveColor] = React.useState('')
  function handleActiveColor(colorName) {
    return setActiveColor(colorName)
  }

  const [activeSize, setActiveSize] = React.useState('')
  function handleActiveSize(sizeName) {
    return setActiveSize(sizeName)
  }

  return (
    <MobileContainer>
      <MobileTitle>Rasteira Tira Dedo</MobileTitle>
      <MobileRefer>RT 0568 | 03.07.0653</MobileRefer>
      <ImageMobile>
        <img src={ImageForMobile} alt="Imagem principal" />
      </ImageMobile>
      <MobileColor>
        <h3>Cor:</h3>
      </MobileColor>
      <MobileColorContainer>
        {colors.map((color) => (
          <ButtonsColors
            active={color.name === activeColor}
            onClick={() => handleActiveColor(color.name)}
            color={color.color}
          />
        ))}
      </MobileColorContainer>
      <MobileSize>
        <h3>Tamanho:</h3>
        <p>Guida de medidas</p>
      </MobileSize>
      <MobileSizeContainer>
        {sizes.map((chooseSize) => (
          <SelectSizeContainer
            active={chooseSize.name === activeSize}
            onClick={() => handleActiveSize(chooseSize.name)}
            chooseSize={chooseSize.color}
          >
            <p>{chooseSize.name}</p>{' '}
          </SelectSizeContainer>
        ))}
      </MobileSizeContainer>
      <MobileShopPrice>
        <PriceContainer>
          <h1>R$ 69,00</h1>
          <strong>R$ 55,20</strong>
          <h2>Ou 6x de R$ 9,20</h2>
        </PriceContainer>
        <ButtonAdd onClick={handleMobileModalClick}>
          <p>Adicionar à Sacola</p>
        </ButtonAdd>
        {mobileModalOpen ? (
          <MobileShowModal setMobileModalOpen={setMobileModalOpen} />
        ) : null}
      </MobileShopPrice>
      <MobileDescription>
        <h2>Descrição</h2>
        <p>
          Rasteira em atanado soft com tira no dedo e fechamento de fivela.
          Possui sola sempre na cor do cabedal.
        </p>
      </MobileDescription>
    </MobileContainer>
  )
}
