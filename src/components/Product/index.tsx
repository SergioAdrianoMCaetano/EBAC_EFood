import { Card, Descricao, Titulo, Button } from './styles'

export type Props = {
  title: string
  category: string
  description: string
  infos: string[]
  image: string
}

const Product = ({ title, category, description, infos, image }: Props) => (
  <Card>
    <div className="container">
      <img src={image} alt={title} />
    </div>
    <div>
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <Button>Adicionar ao carrinho</Button>
    </div>
  </Card>
)

export default Product
