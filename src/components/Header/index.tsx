import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { HeaderBar, LinkItem, Links, LogoImg, CartButton } from './styles'

import logo from '../../assets/images/logo.png'

import carrinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
      <div className="container">
        <HeaderBar>
          <nav>
            <Links>
              <LinkItem>
                <Link to="/">Restaurantes</Link>
              </LinkItem>
            </Links>
          </nav>
          <LogoImg src={logo} alt="eFood" />
          <CartButton onClick={openCart}>
            {items.length} - produto(s)
            <img src={carrinho} alt="Carrinho" />
          </CartButton>
        </HeaderBar>
      </div>
    </>
  )
}

export default Header
