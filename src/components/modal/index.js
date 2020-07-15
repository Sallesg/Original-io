import * as React from 'react'
import {
  Modal,
  Title,
  ItemNumber,
  ItemPrice,
  ShareValue,
  Color,
  Size,
  SizeDescription,
  GuideSize,
  Text,
  ColorContainer,
  SizeContainer,
  ImageMobile,
} from './styles'
import { ButtonsColors, SelectSizeContainer, ShopBag } from 'components'
import ImageForMobile from 'assets/shoesBigImg.jpg'

export function ModalDescription({ cartItems, setCartItems }) {
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
    {
      name: '41',
    },
    {
      name: '42',
    },
  ])

  const [activeColor, setActiveColor] = React.useState('Cor não selecionada')
  function handleActiveColor(colorName) {
    return setActiveColor(colorName)
  }

  const [activeSize, setActiveSize] = React.useState('Não selecionado')
  function handleActiveSize(sizeName) {
    return setActiveSize(sizeName)
  }

  return (
    <Modal>
      <Title>Rasteira tira dedo</Title>
      <ItemNumber>RT 0568 | 03.07.0653</ItemNumber>
      <ItemPrice>
        <p>R$ 69,00 | </p>
        <p>R$ 55,20 </p>
      </ItemPrice>
      <ShareValue>Ou 6x de R$ 9,20</ShareValue>
      <ImageMobile>
        <img src={ImageForMobile} alt="Imagem principal" />
      </ImageMobile>
      <Color>
        <h3>Cor:</h3>
        <p>({activeColor})</p>
      </Color>
      <ColorContainer>
        {colors.map((color) => (
          <ButtonsColors
            active={color.name === activeColor}
            onClick={() => handleActiveColor(color.name)}
            color={color.color}
          />
        ))}
      </ColorContainer>
      <Size>
        <SizeDescription>
          <h3> Tamanho: </h3>
          <p> ({activeSize}) </p>
        </SizeDescription>
        <GuideSize>
          <p>Guia de medidas</p>
        </GuideSize>
      </Size>
      <SizeContainer>
        {sizes.map((chooseSize) => (
          <SelectSizeContainer
            active={chooseSize.name === activeSize}
            onClick={() => handleActiveSize(chooseSize.name)}
            chooseSize={chooseSize.color}
          >
            <p>{chooseSize.name}</p>{' '}
          </SelectSizeContainer>
        ))}
      </SizeContainer>
      <ShopBag cartItems={cartItems} setCartItems={setCartItems} />
      <Text>
        <p>
          Rasteira em atanado soft com tira no dedo e fechamento <br />
          de fivela. Possui sola sempre na cor do cabedal.
        </p>
      </Text>
    </Modal>
  )
}
