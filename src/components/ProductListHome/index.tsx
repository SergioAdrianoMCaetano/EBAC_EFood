import Food from '../../models/Food'
import ProductHome from '../ProductHome'

import { ContainerHome, ListHome } from './styles'

export type Props = {
  foods: Food[]
}

const ProductListHome = ({ foods }: Props) => (
  <ContainerHome>
    <ListHome>
      {foods.map((food) => (
        <ProductHome
          key={food.id}
          title={food.title}
          description={food.description}
          infos={food.infos}
          image={food.image}
        />
      ))}
    </ListHome>
  </ContainerHome>
)

export default ProductListHome
