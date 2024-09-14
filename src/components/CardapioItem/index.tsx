import React, { useState } from 'react'
import { Card, Titulo, Descricao } from '../Product/styles'
import Modal from '../Modal'
import ButtonHome from '../ButtonHome'

type CardapioItemProps = {
  id: number
  nome: string
  descricao2: string
  foto: string
}

const CardapioItem = ({ id, nome, descricao2, foto }: CardapioItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Card>
        <div>
          <img src={foto} alt={nome} className="main-image" />
        </div>
        <div>
          <Titulo>{nome}</Titulo>
          <Descricao>{descricao2}</Descricao>
        </div>
        <ButtonHome type="link" title="Saiba mais" id={id}>
          Saiba mais
        </ButtonHome>
      </Card>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>{nome}</h2>
        <p>{descricao2}</p>
        <img src={foto} alt={nome} />
      </Modal>
    </>
  )
}

export default CardapioItem
