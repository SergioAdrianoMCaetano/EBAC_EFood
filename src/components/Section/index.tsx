import { Container } from './styles'

export type Props = {
  title: string
  children: React.ReactNode
}

const Section = ({ children }: Props) => {
  const getDescricao = (describe: string) => {
    if (describe.length > 150) {
      return describe.slice(0, 150) + '...'
    }
    return describe
  }

  const renderChildren = () => {
    if (typeof children === 'string') {
      return getDescricao(children)
    }
    return children
  }

  return (
    <Container>
      <div className="container">{renderChildren()}</div>
    </Container>
  )
}

export default Section
