import {
  CardContainer,
  Card,
  TituloHome,
  ImgH2,
  ImgStar,
  Descricao
} from './styles'

import estrela from '../../assets/images/estrela.png'
// import hiokiSushi from '../../assets/images/pratoSushi.png'
import Tag from '../Tag'
import ButtonHome from '../ButtonHome'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
}

const ProductHome = ({ title, description, infos, image }: Props) => (
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
          <TituloHome>10.0</TituloHome>
          <img src={estrela} />
        </ImgStar>
      </ImgH2>
      <Descricao>{description}</Descricao>
      <div className="container2">
        <ButtonHome
          type={'link'}
          title={'saiba mais'}
          // eslint-disable-next-line react/no-children-prop
          children={'Saiba mais'}
          to="/"
        />
      </div>
    </Card>
  </CardContainer>
)

export default ProductHome
