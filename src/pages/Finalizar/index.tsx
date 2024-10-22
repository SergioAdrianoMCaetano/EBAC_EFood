import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  FinishButton,
  FinishContainer,
  FinashContent,
  FinishTitle,
  Overlay,
  SideBarFinish
} from './styles'
import { RootReducer } from '../../store'
import ButtonCart from '../../components/ButtonCart/index'

const Finalizar = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()
  const location = useLocation()
  const { items, deliveryDetails, orderId } = location.state || {}

  const handlePaymentClick = () => {
    navigate('/')
  }

  return (
    <FinishContainer className={isOpen ? 'is-open' : ''}>
      <Overlay />
      <SideBarFinish>
        <FinishTitle>Pedido Realizado - Nº {orderId}</FinishTitle>
        <FinashContent>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido:
            <br />
            <strong>
              {deliveryDetails?.endereco}, {deliveryDetails?.cidade}
            </strong>
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras. <br />
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição. <br />
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite! <br />
          </p>
        </FinashContent>
        <FinishButton>
          <ButtonCart
            title="Concluir"
            type="button"
            onClick={handlePaymentClick}
          >
            <p>Concluir</p>
          </ButtonCart>
        </FinishButton>
      </SideBarFinish>
    </FinishContainer>
  )
}

export default Finalizar
