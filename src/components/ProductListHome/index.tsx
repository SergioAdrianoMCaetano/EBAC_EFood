import { Food } from '../../pages/Home'
import ProductHome from '../ProductHome'

import { ContainerHome, ListHome } from './styles'

export type Props = {
  foods: Food[]
}

const ProductListHome = ({ foods }: Props) => {
  const getDescricao = (describe: string) => {
    if (describe.length > 293) {
      return describe.slice(0, 275) + '...'
    }
    return describe
  }
  return (
    <ContainerHome>
      <ListHome>
        {foods.map((food) => (
          <ProductHome
            key={food.id}
            title={food.titulo}
            description={getDescricao(food.descricao)}
            image={food.capa}
            infos={[]}
            id={food.id}
          />
        ))}
      </ListHome>
    </ContainerHome>
  )
}

export default ProductListHome
