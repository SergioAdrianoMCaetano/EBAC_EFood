import React, { useState } from 'react'
import {
  Card,
  Descricao,
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
              <ModalButton>Adicionar ao carrinho - R$60,90</ModalButton>
            </div>
          </ModelContent>
        </Modal>
      )}
    </>
  )
}

export default CardapioItem
