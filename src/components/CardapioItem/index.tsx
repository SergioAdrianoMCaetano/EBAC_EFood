import React, { useState } from 'react'
import {
  Card,
  ModalButton,
  ModalDescription,
  ModalImagem,
  ModalService,
  ModalTitle,
  ModelContent
} from '../Product/styles'
import Modal from '../Modal'
import ButtonCardapio from '../ButtonCardapio'
import {
  DescricaoRestaurante,
  ImagemRestaurante,
  TituloRestaurante
} from './styles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { Food } from '../../pages/Home'
import { formataPreco } from '../Cart'
import { useGetRestaurantQuery } from '../../service/api'

type CardapioItemProps = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  avaliacao: number
  destacado: boolean
  porcao: string
  tipo: string
  cardapio: []
}

const CardapioItem = ({ id, nome, descricao, foto }: CardapioItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {
    data: restaurante,
    error,
    isLoading,
    refetch
  } = useGetRestaurantQuery(id.toString())

  const handleOpenModal = () => {
    setIsModalOpen(true)
    if (!restaurante) {
      refetch()
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const getDescricao = (describe: string) => {
    if (describe.length > 240) {
      return describe.slice(0, 240) + '...'
    }
    return describe
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    if (restaurante) {
      const foodItem: Food = {
        id: restaurante.id,
        titulo: restaurante.titulo,
        preco: restaurante.preco,
        destacado: restaurante.destacado,
        tipo: restaurante.tipo,
        avaliacao: restaurante.avaliacao,
        descricao: restaurante.descricao,
        capa: restaurante.capa,
        infos: '',
        cardapio: restaurante.cardapio
      }

      dispatch(add(foodItem))
      dispatch(open())
    }
  }

  return (
    <>
      <Card>
        <div>
          <ImagemRestaurante src={foto} alt={nome} className="main-image" />
        </div>
        <div className="container">
          <TituloRestaurante>{nome}</TituloRestaurante>
          <DescricaoRestaurante>{getDescricao(descricao)}</DescricaoRestaurante>
          <ButtonCardapio
            type="button"
            title="Mais detalhes"
            id={id}
            onClick={handleOpenModal}
          >
            Mais detalhes
          </ButtonCardapio>
        </div>
      </Card>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          {isLoading ? (
            <p>Carregando...</p>
          ) : error ? (
            <>
              <p>Erro ao carregar dados.</p>
              <pre>{JSON.stringify(error, null, 2)}</pre>
            </>
          ) : (
            restaurante && (
              <ModelContent>
                <ModalImagem src={restaurante.capa} alt={restaurante.titulo} />
                <div className="container">
                  <ModalTitle>{restaurante.titulo}</ModalTitle>
                  <ModalDescription>{restaurante.descricao}</ModalDescription>
                  <ModalService>{restaurante.cardapio[0].porcao}</ModalService>
                  <ModalButton onClick={addToCart}>
                    Adicionar ao carrinho -{' '}
                    {formataPreco(restaurante.cardapio[0].preco)}
                  </ModalButton>
                </div>
              </ModelContent>
            )
          )}
        </Modal>
      )}
    </>
  )
}

export default CardapioItem
