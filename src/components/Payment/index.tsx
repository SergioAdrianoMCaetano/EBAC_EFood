import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  PaymentButton,
  PaymentContainer,
  InputGroup,
  PricePayment,
  Overlay,
  Row,
  SideBarPayment
} from './styles'
import { RootReducer } from '../../store'

import ButtonCart from '../ButtonCart'

import { formataPreco } from '../Cart'

import { Prices } from '../Cart/styles'

import { useFormik } from 'formik'

import * as Yup from 'yup'
import { usePurchaseMutation } from '../../service/api'

const Payment = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const handlePaymentClick = () => {
    navigate('/finalizar')
  }

  const handleBackClick = () => {
    const from = '/delivery'
    navigate(from)
  }

  const getTotalPreco = () => {
    return items.reduce((acumulador, item) => {
      return acumulador + item.cardapio[0].preco
    }, 0)
  }

  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardDisplayName: Yup.string()
        .min(13, 'O nome precisa ter, pelo menos, 3 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(14, 'O campo precisa ter, pelo menos, 14 caracteres')
        .required('O campo é obrigatório'),
      cardCode: Yup.number()
        .min(3, 'O campo precisa ter, pelo menos, 1 número')
        .max(3, 'O campo precisa ter, pelo menos, 3 número')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'o campo precisa ter, pelo menos, 10 caracteres')
        .max(4, 'O campo deve ter, no máximo, 4 caracteres')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'O campo precisa ter, pelo menos, 4 caracteres')
        .max(4, 'O campo deve ter, no máximo, 4 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: 1,
            expires: {
              month: 10,
              year: 26
            }
          }
        },
        products: [],
        delivery: {
          receiver: '',
          address: {
            description: '',
            city: '',
            zipCode: '',
            number: 0,
            complement: ''
          }
        }
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const estadoAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors

    if (estadoAlterado && estaInvalido) return message
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <PaymentContainer className={isOpen ? 'is-open' : ''}>
        <Overlay />
        <SideBarPayment>
          <PricePayment>
            <Prices>
              <span>Pagamento - Valor a pagar {''}</span>
              {formataPreco(getTotalPreco())}
            </Prices>
          </PricePayment>
          <InputGroup>
            <label htmlFor="cardDisplayName">Nome do Cartão</label>
            <input
              id="cardDisplayName"
              type="text"
              name="cardDisplayName"
              value={form.values.cardDisplayName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('cardDisplayName', form.errors.cardDisplayName)}
            </small>
          </InputGroup>
          <Row>
            <InputGroup>
              <label htmlFor="cardNumber">Número do Cartão</label>
              <input
                id="cardNumber"
                type="text"
                name="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('cardNumber', form.errors.cardNumber)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cardCode">CVV</label>
              <input
                id="cardCode"
                type="number"
                name="cardCode"
                value={form.values.cardCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cardCode', form.errors.cardCode)}</small>
            </InputGroup>
          </Row>
          <Row>
            <InputGroup>
              <label htmlFor="expiresMonth">Mês de Vencimento</label>
              <input
                id="expiresMonth"
                type="text"
                name="expiresMonth"
                value={form.values.expiresMonth}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="expiresYear">Ano de Vencimento</label>
              <input
                id="expiresYear"
                type="text"
                name="expiresYear"
                value={form.values.expiresYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('expiresYear', form.errors.expiresYear)}
              </small>
            </InputGroup>
          </Row>
          <PaymentButton>
            <ButtonCart
              title="Continuar com o pagamento"
              type="submit"
              onClick={handlePaymentClick}
            >
              <p>Continuar com o pagamento</p>
            </ButtonCart>
            <ButtonCart
              title="Voltar à entrega"
              type="button"
              onClick={handleBackClick}
            >
              <p>Voltar à entrega</p>
            </ButtonCart>
          </PaymentButton>
        </SideBarPayment>
      </PaymentContainer>
    </form>
  )
}

export default Payment
