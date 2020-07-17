import React from 'react'
import {
  MobileRightContainer,
  HeaderRight,
  ItemsSection,
  MobilePromotion,
  MobileFooter,
  MobileTitle,
  CloseMobileModal,
  MobileColumns,
  MobileProducts,
  MobileImages,
  MobileText,
  MobilePrice,
  MobileProductsDetail,
  MobileCountSection,
  MobileDeleteItem,
  MobileMinus,
  MobileMore,
  MobileTextPromotion,
  MobilePriceDetails,
  MobileTotal,
  MobileShareTotal,
  MobileCheckout,
} from './styles'
import close from 'assets/close.png'
import shoes from 'assets/shoes.png'
import wallet from 'assets/wallet.png'
import handbag from 'assets/handbag.png'
import sandals from 'assets/sandals.png'
import deleteItem from 'assets/delete.png'

export function MobileRightModal({ setMobileModalOpen }) {
  const products = [
    {
      img: shoes,
      text: 'Rasteira Tira Dedo',
      price: 'R$ 49,90',
      quantity: 1,
    },
    {
      img: wallet,
      text: 'Rasteira Tira Dedo',
      price: 'R$ 59,90',
      quantity: 2,
    },
    {
      img: handbag,
      text: 'Rasteira Tira Dedo',
      price: 'R$ 69,90',
      quantity: 3,
    },
    {
      img: sandals,
      text: 'Rasteira Tira Dedo',
      price: 'R$ 79,90',
      quantity: 4,
    },
    {
      img: sandals,
      text: 'Rasteira Tira Dedo',
      price: ['49,90', '40,90'],
      quantity: 4,
    },
  ]

  return (
    <MobileRightContainer>
      <HeaderRight>
        <MobileTitle>
          <h1>Sacola</h1>
          <p>5 Itens</p>
        </MobileTitle>
        <CloseMobileModal
          src={close}
          alt="Clique para fechar"
          onClick={() => setMobileModalOpen(false)}
        />
      </HeaderRight>
      <ItemsSection>
        <MobileColumns>
          {products.map((product) => (
            <MobileProducts>
              <MobileImages>
                <img src={product.img} alt={product.text} />
              </MobileImages>
              <MobileProductsDetail>
                <MobileText>{product.text}</MobileText>
                <MobilePrice>{product.price}</MobilePrice>
              </MobileProductsDetail>
              <MobileCountSection>
                <MobileMinus>-</MobileMinus>
                <p>{product.quantity}</p>
                <MobileMore>+</MobileMore>
              </MobileCountSection>
              <MobileDeleteItem>
                <img src={deleteItem} alt="clique para excluir o item" />
              </MobileDeleteItem>
            </MobileProducts>
          ))}
        </MobileColumns>
      </ItemsSection>
      <MobilePromotion>
        <MobileTextPromotion>
          Faltam R$ xx,xx para você <br /> Ganhar Frete Grátis
        </MobileTextPromotion>
      </MobilePromotion>
      <MobileFooter>
        <MobilePriceDetails>
          <MobileTotal>Total: R$ 149,00</MobileTotal>
          <MobileShareTotal>até 3x de R$ 49,90 sem juros </MobileShareTotal>
        </MobilePriceDetails>
        <MobileCheckout onClick={() => setMobileModalOpen(false)}>
          Finalizar compra
        </MobileCheckout>
      </MobileFooter>
    </MobileRightContainer>
  )
}
