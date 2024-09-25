import { useDispatch, useSelector } from 'react-redux'

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

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
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
                    <ItemPreco>R$60,69</ItemPreco>
                  </ItemDetails>
                  <ImagLixeira onClick={() => removeItem(item.id)} />
                </ListItem>
              </ul>
            </CartItem>
          ))}
        </ul>
        <ItemDetails>
          <Quantity>{items.length} prato(s) no carrinho</Quantity>
          <div>
            <Prices>Valor total</Prices>
            <Prices>R$250,00</Prices>
          </div>
        </ItemDetails>
        <ButtonCart title="Continuar com a entrega" type="button">
          Continuar com a entrega
        </ButtonCart>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
