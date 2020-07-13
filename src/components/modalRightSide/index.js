import * as React from 'react'
import {
  ContainerRightModal, 
  ModalSideView, 
  ModalHeader, 
  ModalTitle, 
  CloseModal, 
  Line,
  ProductsItems, 
  VerticalLine,
  ImagesSection,
  ProductsDetails,
  Products,
  Text,
  Price,
  DeleteItem,
  CountSection,
  Minus,
  More,
  ShareColumns,
  Promotion,
  TextPromotion,
  ModalFooter,
  PriceDetails,
  Checkout,
  Total,
  ShareTotal,
  PromotioWrapper
} from './styles'
import close from '../../assets/close.png'
import shoes from '../../assets/shoes.png'
import wallet from '../../assets/wallet.png'
import handbag from '../../assets/handbag.png'
import sandals from '../../assets/sandals.png'
import deleteItem from '../../assets/delete.png'

export function ModalRightSide({ setModalOpen }) {
  const handleClose = () => {
    document.body.classList.remove('no-overflow')
    return setModalOpen(false)
  }

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
      price: [
        '49,90', '40,90'
      ],
      quantity: 4,
    },
  ]

  return(
    <>
    <ContainerRightModal />      
    <ModalSideView>
    <ModalHeader>
      <ModalTitle>
        <h1>Sacola</h1>
        <p>5 itens</p>
      </ModalTitle>
      <CloseModal onClick={handleClose}>
        <img src={close} alt="Clique para fechar" /> 
      </CloseModal>
    </ModalHeader>
    <Line/>        
      <ProductsItems>
        <ShareColumns>
          {
            products.map(product => (
              <Products>
                <ImagesSection>
                <img src={product.img} alt={product.text}/>
                </ImagesSection>
                <ProductsDetails>
                  <Text>{product.text}</Text>
                  <Price>{product.price}</Price> 
                  </ProductsDetails>
                  <CountSection>
                    <Minus>
                        -
                    </Minus>
                      <p>{product.quantity}</p>
                    <More>
                        +
                    </More>
                </CountSection> 
                <DeleteItem>
                <img src={deleteItem} alt=""/>
                </DeleteItem>                
              </Products> 
            ))
          }
        </ShareColumns>             
      </ProductsItems>
      <PromotioWrapper>
        <Promotion>
          <TextPromotion>
            Faltam R$ xx,xx para você 
          </TextPromotion>
          <p>Ganhar Frete Grátis</p>             
        </Promotion>
        <ModalFooter>
          <PriceDetails>
            <Total>Total: R$ 149,00</Total>
            <ShareTotal>até 3x de R$ 49,90 sem juros </ShareTotal>
          </PriceDetails>
          <Checkout>
            Finalizar compra
          </Checkout>
        </ModalFooter>
      </PromotioWrapper>
  </ModalSideView>
  </>
  )
}