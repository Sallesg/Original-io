import React from 'react'
import { Modal } from 'components'
import { BagButton } from './styles'

export function ShopBag({ cartItems, setCartItems }) {
  const [modalOpen, setModalOpen] = React.useState(false)
  const handleModalClick = () => {
    setCartItems((cartItems += 1))
    return setModalOpen(true)
  }

  return (
    <div>
      <BagButton onClick={handleModalClick}>Adicionar à sacola</BagButton>
      {modalOpen ? <Modal setModalOpen={setModalOpen} /> : null}
    </div>
  )
}
