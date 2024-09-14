import { Container, Title } from './styles'

export type Props = {
  title: string
  children: React.ReactNode
}

const Section = ({ title, children }: Props) => (
  <Container>
    <div className="container">
      <Title>{title}</Title>
      {children}
    </div>
  </Container>
)

export default Section
