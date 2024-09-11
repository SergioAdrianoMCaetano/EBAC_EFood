import HeaderHome from '../../components/HeaderHome'
import ProductListHome from '../../components/ProductListHome'

import { useEffect, useState } from 'react'

export type Food = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  infos: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao2: string
    porcao: string
  }[]
}

const Home = () => {
  const [destaquesDaSemana, setDestaquesDaSemana] = useState<Food[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setDestaquesDaSemana(res))
      .catch((error) => console.error('Erro ao buscar os dados', error))
  })

  return (
    <>
      <HeaderHome />
      <ProductListHome foods={destaquesDaSemana} />
    </>
  )
}

export default Home
