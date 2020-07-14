import * as React from 'react'
import logo from 'assets/logo.jpg'
import iconSearch from 'assets/icon-search.png'
import iconBag from 'assets/icon-bag.png'
import {
  Container,
  LogoWrapper,
  Menu,
  Login,
  Categories,
  Cart,
  Search,
  Bag,
} from './styles'
import { ModalRightSide } from 'components'

export function Header({ cartItems }) {
  const [modalOpen, setModalOpen] = React.useState(false)
  const categories = ['Sapatos', 'Bolsas', 'Acessórios', 'Off']

  const handleModalClick = () => {
    document.body.classList.add('no-overflow')
    return setModalOpen(true)
  }

  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="logo do original-io" />
      </LogoWrapper>
      <Menu>
        <Login>Entrar | Cadastrar-se</Login>
        <Categories>
          <ul>
            {categories.map((category) => (
              <li>{category}</li>
            ))}
          </ul>
        </Categories>
        <Cart>
          <Search>
            <img src={iconSearch} alt="Campo de busca" />
            <span>Busca</span>
          </Search>

          <Bag>
            <img
              onClick={handleModalClick}
              src={iconBag}
              alt="Sacola de compras"
            />
            {modalOpen ? <ModalRightSide setModalOpen={setModalOpen} /> : null}

            <p>{cartItems}</p>
          </Bag>
        </Cart>
      </Menu>
    </Container>
  )
}
