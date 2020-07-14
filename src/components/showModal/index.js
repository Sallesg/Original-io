import * as React from 'react'
import {
  ModalCard,
  ContainerCard,
  CloseModal,
  ItemsCard,
  EndShop,
} from './styles'
import shoesBigImg from 'assets/shoesBigImg.jpg'
import close from 'assets/close.png'

export function Modal({ setModalOpen }) {
  return (
    <ModalCard>
      <ContainerCard>
        <CloseModal onClick={() => setModalOpen(false)}>
          <img src={close} alt="Clique para fechar" />
        </CloseModal>
        <ItemsCard>
          <img src={shoesBigImg} alt="Imagem de sapatos" />
          <h1>
            Produto adicionado <br /> com sucesso!
          </h1>
          <EndShop>Finalizar Compra</EndShop>
          <p>Continuar Comprando</p>
        </ItemsCard>
      </ContainerCard>
    </ModalCard>
  )
}
