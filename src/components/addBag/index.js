import * as React from 'react'
import { useState } from 'react'
import { BagButton } from './styles'
import { Modal } from '../showModal/index'

export function ShopBag({ cartItems, setCartItems }) {
  const [ modalOpen, setModalOpen ] = useState(false);
  const handleModalClick = () => {
    setCartItems(cartItems += 1)
    return setModalOpen(true);
  }

  return (
    <div>
      <BagButton onClick={ handleModalClick }>
        Adicionar à sacola
      </BagButton>
      {modalOpen ? <Modal setModalOpen={setModalOpen}/> : null}
    </div>
  )
}