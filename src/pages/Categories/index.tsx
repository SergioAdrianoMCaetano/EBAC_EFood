import Header from '../../components/Header'
import HeaderImg from '../../components/HeaderImg'
import ProductList from '../../components/ProductList'

import pratoPizza from '../../assets/images/pratoPizza.png'
import { Food } from '../Home'
import { Categoria } from '../../types'

const categorias: Categoria[] = [
  {
    id: 1,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita',
    capa: pratoPizza,
    destacado: false,
    tipo: '',
    avaliacao: 0,
    infos: '',
    cardapio: []
  },
  {
    id: 2,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita',
    capa: pratoPizza,
    destacado: false,
    tipo: '',
    avaliacao: 0,
    infos: '',
    cardapio: []
  },
  {
    id: 3,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita',
    capa: pratoPizza,
    destacado: false,
    tipo: '',
    avaliacao: 0,
    infos: '',
    cardapio: []
  },
  {
    id: 4,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita',
    capa: pratoPizza,
    destacado: false,
    tipo: '',
    avaliacao: 0,
    infos: '',
    cardapio: []
  },
  {
    id: 5,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita',
    capa: pratoPizza,
    destacado: false,
    tipo: '',
    avaliacao: 0,
    infos: '',
    cardapio: []
  },
  {
    id: 6,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    titulo: 'Pizza Marguerita',
    capa: pratoPizza,
    destacado: false,
    tipo: '',
    avaliacao: 0,
    infos: '',
    cardapio: []
  }
]

const Categorias = () => (
  <>
    <Header />
    <HeaderImg />
    <ProductList foods={categorias} />
  </>
)

export default Categorias
