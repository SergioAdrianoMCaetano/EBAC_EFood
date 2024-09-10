import Header from '../../components/Header'
import HeaderImg from '../../components/HeaderImg'
import ProductList from '../../components/ProductList'

import pratoPizza from '../../assets/images/pratoPizza.png'
import Food from '../../models/Food'

const categorias: Food[] = [
  {
    id: 1,
    category: 'Serve: de 2 a 3 pessoas',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: ['Italiana'],
    image: pratoPizza
  },
  {
    id: 2,
    category: 'Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: ['Italiana'],
    image: pratoPizza
  },
  {
    id: 3,
    category: 'Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: ['Italiana'],
    image: pratoPizza
  },
  {
    id: 4,
    category: 'Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: ['Italiana'],
    image: pratoPizza
  },
  {
    id: 5,
    category: 'Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: ['Italiana'],
    image: pratoPizza
  },
  {
    id: 6,
    category: 'Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: ['Italiana'],
    image: pratoPizza
  }
]

const Categories = () => (
  <>
    <Header />
    <HeaderImg />
    <ProductList foods={categorias} />
  </>
)

export default Categories
