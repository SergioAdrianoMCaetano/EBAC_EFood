import React from 'react'
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
import { useGetRestaurantQuery } from '../../service/api'

type Props = {
  id: number
  title: string
  description: string
  infos: string[]
  image: string
  avaliacao: number
}

const ProductHome = ({ id, title, description, infos, image }: Props) => {
  const {
    data: restaurante,
    error,
    isLoading
  } = useGetRestaurantQuery(id.toString())

  if (isLoading) {
    return <p>Carregando...</p>
  }

  if (error) {
    return <p>Erro ao carregar dados.</p>
  }

  return (
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
            <TituloHome>{restaurante?.avaliacao}</TituloHome>
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
}

export default ProductHome
