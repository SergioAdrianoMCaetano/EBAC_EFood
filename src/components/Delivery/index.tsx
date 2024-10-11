import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  DeliveryButton,
  DeliveryContainer,
  DeliveryTitle,
  InputGroup,
  Overlay,
  Row,
  SideBarDelivery
} from './styles'
import { RootReducer } from '../../store'

import ButtonCart from '../ButtonCart'

import { useFormik } from 'formik'

import * as Yup from 'yup'

import { usePurchaseMutation } from '../../service/api'

const Delivery = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()
  const location = useLocation()

  const handlePaymentClick = () => {
    navigate('/pagamentos')
  }

  const handleBackClick = () => {
    const from = location.state?.from || '/'
    navigate(from)
  }

  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(4, 'O nome precisa ter, pelo menos, 4 caracteres')
        .required('O campo é obrigatório'),
      endereco: Yup.string()
        .min(10, 'o endereço precisa ter, pelo menos, 10 caracteres')
        .required('O campo é obrigatório'),
      cidade: Yup.string()
        .min(4, 'A cidade precisa ter, pelo menos, 4 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(14, 'O CEP precisa ter 14 caracteres')
        .max(14, 'O CEP precisa ter, pelo menos, 14 caracteres')
        .required('O campo é obrigatório'),
      numero: Yup.number().min(1, 'O campo precisa ter, pelo menos, 1 número'),
      complemento: Yup.string().min(
        3,
        'O campo precisa ter, pelo menos, 3 caracteres'
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: 1,
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: '',
            number: '',
            code: 0,
            expires: {
              month: 0,
              year: 0
            }
          }
        },
        product: []
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
      <DeliveryContainer className={isOpen ? 'is-open' : ''}>
        <Overlay />
        <SideBarDelivery>
          <DeliveryTitle>Entrega</DeliveryTitle>
          <InputGroup>
            <label htmlFor="fullName">Quem irá receber?</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={form.values.fullName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="endereco">Endereço</label>
            <input
              id="endereco"
              type="text"
              name="endereco"
              value={form.values.endereco}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('endereco', form.errors.endereco)}</small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="cidade">Cidade</label>
            <input
              id="cidade"
              type="text"
              name="cidade"
              value={form.values.cidade}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('cidade', form.errors.cidade)}</small>
          </InputGroup>
          <Row>
            <InputGroup>
              <label htmlFor="cep">CEP</label>
              <input
                id="cep"
                type="text"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cep', form.errors.cep)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="numero">Número</label>
              <input
                id="numero"
                type="text"
                name="numero"
                value={form.values.numero}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('numero', form.errors.numero)}</small>
            </InputGroup>
          </Row>
          <InputGroup>
            <label htmlFor="complemento">Complemento (opcional)</label>
            <input
              id="complemento"
              type="text"
              name="complemento"
              value={form.values.complemento}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('complemento', form.errors.complemento)}
            </small>
          </InputGroup>
          <DeliveryButton>
            <ButtonCart
              title="Continuar com a entrega"
              type="submit"
              onClick={handlePaymentClick}
            >
              <p>Continuar com o pagamento</p>
            </ButtonCart>
            <ButtonCart
              title="Voltar ao carrinho"
              type="button"
              onClick={handleBackClick}
            >
              <p>Voltar ao carrinho</p>
            </ButtonCart>
          </DeliveryButton>
        </SideBarDelivery>
      </DeliveryContainer>
    </form>
  )
}

export default Delivery
