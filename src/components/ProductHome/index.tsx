import {
  CardContainer,
  Card,
  TituloHome,
  ImgH2,
  ImgStar,
  Descricao
} from './styles'

import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import ButtonHome from '../ButtonHome'

type Props = {
  id: number
  title: string
  description: string
  infos: string[]
  image: string
}

const ProductHome = ({ id, title, description, infos, image }: Props) => (
  <CardContainer>
    <div className="container">
      <img src={image} alt={title} />
    </div>
    <div className="tag">
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </div>
    <Card>
      <ImgH2>
        <TituloHome>{title}</TituloHome>
        <ImgStar>
          <TituloHome>4.6</TituloHome>
          <img src={estrela} alt="Estrela" />
        </ImgStar>
      </ImgH2>
      <Descricao>{description}</Descricao>
      <div className="container2">
        <ButtonHome
          type="link"
          title="Saiba mais"
          id={id} // Passando o id para o ButtonHome
        >
          Saiba mais
        </ButtonHome>
      </div>
    </Card>
  </CardContainer>
)

export default ProductHome
