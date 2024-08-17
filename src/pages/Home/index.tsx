import HeaderHome from '../../components/HeaderHome'
import ProductListHome from '../../components/ProductListHome'
import Food from '../../models/Food'

import hiokiSushi from '../../assets/images/pratoSushi.png'

const destaquesDaSemana: Food[] = [
  {
    id: 1,
    category: 'Japonesa',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'Hioki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    image: hiokiSushi
  },
  {
    id: 2,
    category: 'Japonesa',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'Hioki Sushi',
    infos: ['Japonesa'],
    image: hiokiSushi
  },
  {
    id: 3,
    category: 'Japonesa',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'Hioki Sushi',
    infos: ['Japonesa'],
    image: hiokiSushi
  },
  {
    id: 4,
    category: 'Japonesa',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'Hioki Sushi',
    infos: ['Japonesa'],
    image: hiokiSushi
  },
  {
    id: 5,
    category: 'Japonesa',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'Hioki Sushi',
    infos: ['Japonesa'],
    image: hiokiSushi
  },
  {
    id: 6,
    category: 'Japonesa',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'Hioki Sushi',
    infos: ['Japonesa'],
    image: hiokiSushi
  }
]

const Home = () => (
  <>
    <HeaderHome />
    <ProductListHome foods={destaquesDaSemana} />
  </>
)

export default Home
