import React, { useEffect } from 'react'
import {
  WrapperComponent,
  Header,
  BreadCrumb,
  OnVIdeo,
  MainImage,
  ModalDescription,
  MainCardsTitle,
  SlideControl,
  Footer,
} from 'components'
import { ProductsSection } from './styles'

export function ProductDetail() {
  const [cartItems, setCartItems] = React.useState(0)
  useEffect(() => {
    const savedItems = localStorage.getItem('cart')
    if (savedItems) setCartItems(+savedItems)
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', cartItems)
  }, [cartItems])

  return (
    <WrapperComponent>
      <Header cartItems={cartItems} />
      <BreadCrumb />
      <ProductsSection>
        <OnVIdeo />
        <MainImage />
        <ModalDescription cartItems={cartItems} setCartItems={setCartItems} />
      </ProductsSection>
      <MainCardsTitle />
      <SlideControl />
      <Footer />
    </WrapperComponent>
  )
}
