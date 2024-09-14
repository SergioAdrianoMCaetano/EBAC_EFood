import { ButtonContainer, ButtonLinkHome } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  id?: number // Adicione a propriedade id
}

const ButtonHome = ({ type, title, onClick, children, id }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLinkHome to={`/restaurantes/${id}`} title={title}>
      {children}
    </ButtonLinkHome>
  )
}

export default ButtonHome
