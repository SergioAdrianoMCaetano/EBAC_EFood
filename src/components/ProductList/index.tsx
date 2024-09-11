import { ProductContainer, List } from './styles'

import { Container } from '../../styles'

import Product from '../Product'
import { Food } from '../../pages/Home'
import { useEffect, useState } from 'react'

export type Props = {
  foods: Food[]
}

const ProductList = ({ foods }: Props) => {
  const [destaquesDaSemana, setDestaquesDaSemana] = useState<Food[]>([])

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
          {foods.map((food) => (
            <Product
              key={food.id}
              title={food.titulo}
              category={food.tipo}
              description={food.descricao}
              image={food.capa}
            />
          ))}
        </List>
      </Container>
    </ProductContainer>
  )
}

export default ProductList
