import { useEffect, useState } from 'react'

import { ProductContainer, List } from './styles'
import { Container } from '../../styles'
import CardapioItem from '../CardapioItem'
import { MenuItem, Categoria } from '../../types'

export type Props = {
  foods: MenuItem[] | Categoria[]
}

const ProductList = ({ foods }: Props) => {
  const [destaquesDaSemana, setDestaquesDaSemana] = useState<MenuItem[]>([])

  const fetchDestaques = async () => {
    try {
      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/restaurantes'
      )
      const data = await response.json()
      setDestaquesDaSemana(data)
    } catch (error) {
      console.error('Erro ao buscar os destaques', error)
    }
  }

  useEffect(() => {
    fetchDestaques()
  }, [])

  return (
    <ProductContainer>
      <Container className="container">
        <List>
          {Array.isArray(foods) &&
            foods.map((food) =>
              'cardapio' in food ? (
                food.cardapio.map((item) => (
                  <CardapioItem
                    key={item.id}
                    id={item.id}
                    nome={item.nome}
                    descricao={item.descricao}
                    foto={item.foto}
                    preco={item.preco}
                    porcao={item.porcao}
                    avaliacao={0}
                    destacado={false}
                    tipo={''}
                    cardapio={[]}
                  />
                ))
              ) : (
                <CardapioItem
                  key={food.id}
                  id={food.id}
                  nome={food.nome}
                  descricao={food.descricao}
                  foto={food.foto}
                  preco={0}
                  avaliacao={0}
                  destacado={false}
                  porcao={''}
                  tipo={''}
                  cardapio={[]}
                />
              )
            )}
        </List>
      </Container>
    </ProductContainer>
  )
}

export default ProductList
