import { ButtonLinkCart, ButtonCarti } from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: JSX.Element
  id?: number
}

const ButtonCart = ({ type, title, onClick, children, id }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonCarti type="button" title={title} onClick={onClick}>
        {children}
      </ButtonCarti>
    )
  }

  return (
    <ButtonLinkCart to={`/restaurantes/${id}`} title={title}>
      {children}
    </ButtonLinkCart>
  )
}

export default ButtonCart
