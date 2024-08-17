import { ProductContainer, List } from './styles'

import { Container } from '../../styles'

import Product from '../Product'
import Food from '../../models/Food'

export type Props = {
  foods: Food[]
}

const ProductList = ({ foods }: Props) => (
  <ProductContainer>
    <Container className="container">
      <List>
        {foods.map((food) => (
          <Product
            key={food.id}
            title={food.title}
            category={food.category}
            description={food.description}
            infos={food.infos}
            image={food.image}
          />
        ))}
      </List>
    </Container>
  </ProductContainer>
)

export default ProductList
