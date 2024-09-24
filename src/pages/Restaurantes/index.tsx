import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import HeaderImg from '../../components/HeaderImg'
import ProductList from '../../components/ProductList'
import Section from '../../components/Section'

import { MenuItem } from '../../types'

// import { useGetRestaurantQuery } from '../../service/api'

const Restaurantes = () => {
  const { id } = useParams()
  // const { data: rest } = useGetRestaurantQuery(id!)

  const [restaurante, setRestaurante] = useState<{
    titulo: string
    cardapio: MenuItem[]
  } | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data) // Verifique os dados retornados
        setRestaurante(data)
      })
      .catch((error) => console.error('Erro ao buscar os dados', error))
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <HeaderImg />
      <Section title={restaurante.titulo}>
        <ProductList foods={restaurante.cardapio} />
      </Section>
    </>
  )
}

export default Restaurantes
