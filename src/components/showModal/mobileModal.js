import React from 'react'
import {
  MobileContainer,
  MobileCard,
  CloseMobileModal,
  MobileItemsCard,
  MobileEndShop,
} from './styles'
import shoesBigImg from 'assets/shoesBigImg.jpg'
import close from 'assets/close.png'

export function MobileShowModal({ setMobileModalOpen }) {
  return (
    <MobileContainer>
      <MobileCard>
        <CloseMobileModal onClick={() => setMobileModalOpen(false)}>
          <img src={close} alt="Clique para fechar" />
        </CloseMobileModal>
        <MobileItemsCard>
          <h1>
            Produto Adicionado <br /> com sucesso!
          </h1>
          <img src={shoesBigImg} alt="Imagem de sapatos" />
          <MobileEndShop onClick={() => setMobileModalOpen(false)}>
            Finalizar Compra
          </MobileEndShop>
          <p onClick={() => setMobileModalOpen(false)}>Continuar Comprando</p>
        </MobileItemsCard>
      </MobileCard>
    </MobileContainer>
  )
}
