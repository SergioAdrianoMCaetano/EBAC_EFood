import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import ButtonCart from '../ButtonCart'

import {
  CartContainer,
  CartItem,
  ImagLixeira,
  ItemDetails,
  ItemImg,
  ItemPreco,
  ItemTitulo,
  ListItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [previousUrl, setPreviousUrl] = useState('')

  useEffect(() => {
    setPreviousUrl(location.pathname)
  }, [location.pathname])

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPreco = () => {
    return items.reduce((acumulador, item) => {
      return acumulador + item.cardapio[0].preco
    }, 0)
  }

  const handleContinueAndClose = () => {
    closeCart()
    navigate('/entrega', { state: { from: previousUrl, items } })
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <ul>
                <ListItem>
                  <ItemImg src={item.capa} alt={item.titulo} />
                  <ItemDetails>
                    <ItemTitulo>{item.titulo}</ItemTitulo>
                    <ItemPreco>
                      {formataPreco(item.cardapio[0].preco)}
                    </ItemPreco>
                  </ItemDetails>
                  <ImagLixeira onClick={() => removeItem(item.id)} />
                </ListItem>
              </ul>
            </CartItem>
          ))}
        </ul>
        <ItemDetails>
          <Quantity>{items.length} prato(s) adicionados ao carrinho</Quantity>
          <div>
            <Prices>Valor total</Prices>
            <Prices>{formataPreco(getTotalPreco())}</Prices>
          </div>
        </ItemDetails>
        <ButtonCart
          title="Continuar com a entrega"
          type="button"
          onClick={handleContinueAndClose}
        >
          <p>Continuar com a entrega</p>
        </ButtonCart>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
