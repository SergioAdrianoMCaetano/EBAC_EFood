import { ButtonLinkRestaurante, ButtonRestaurante } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  id?: number
}

const ButtonCardapio = ({ type, title, onClick, children, id }: Props) => {
  if (type === 'button') {
    return (
      <ButtonRestaurante type="button" title={title} onClick={onClick}>
        {children}
      </ButtonRestaurante>
    )
  }

  return (
    <ButtonLinkRestaurante to={`/restaurantes/${id}`} title={title}>
      {children}
    </ButtonLinkRestaurante>
  )
}

export default ButtonCardapio
