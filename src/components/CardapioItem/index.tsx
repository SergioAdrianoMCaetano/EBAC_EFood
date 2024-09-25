import React, { useState } from 'react'
import {
  Card,
  // Descricao,
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

type CardapioItemProps = {
  id: number
  nome: string
  descricao: string
  foto: string
}

const CardapioItem = ({ id, nome, descricao, foto }: CardapioItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
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
    // const foodItem: CardapioItemProps = {
    //   id,
    //   nome,
    //   descricao,
    //   foto
    // }
    const foodItem: Food = {
      id,
      titulo: nome,
      destacado: false, // ou true, dependendo do seu caso
      tipo: 'comida', // ou outro tipo relevante
      avaliacao: 0, // ou a avaliação correta
      descricao,
      capa: foto,
      infos: '',
      cardapio: [
        {
          foto,
          preco: 60.9, // ou o preço correto
          id,
          nome,
          descricao2: descricao,
          porcao: '2 a 3 pessoas' // ou a porção correta
        }
      ]
    }

    dispatch(add(foodItem))
    dispatch(open())
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
          <ModelContent>
            <ModalImagem src={foto} alt={nome} />
            <div className="container">
              <ModalTitle>{nome}</ModalTitle>
              <ModalDescription>{descricao}</ModalDescription>
              <ModalService>Serve: de 2 a 3 pessoas</ModalService>
              <ModalButton onClick={addToCart}>
                Adicionar ao carrinho - R$60,90
              </ModalButton>
            </div>
          </ModelContent>
        </Modal>
      )}
    </>
  )
}

export default CardapioItem
