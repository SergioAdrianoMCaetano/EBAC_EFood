import { Card, Descricao, Titulo, Button } from './styles'

import { useState } from 'react'
import Modal from '../Modal'

import {
  ModelContent,
  ModalButton,
  ModalDescription,
  ModalService,
  ModalImagem,
  ModalTitle
} from './styles'

export type Props = {
  title: string
  nome: string
  category: string
  description: string
  image: string
  id: number
}

const Product = ({ title, id, description, image }: Props) => {
  const getDescricao = (describe: string) => {
    if (describe.length > 293) {
      return describe.slice(0, 290) + '...'
    }
    return describe
  }

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
          <img src={image} alt={title} className="main-image" />
        </div>
        <div>
          <Titulo>{title}</Titulo>
          <Descricao>{getDescricao(description)}</Descricao>
        </div>
        <Button onClick={handleOpenModal}>Mais detalhes</Button>
      </Card>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ModelContent>
            <ModalImagem src={image} alt={title} />
            <div className="container">
              <ModalTitle>{title}</ModalTitle>
              <ModalDescription>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
              </ModalDescription>
              <ModalService>Serve: de 2 a 3 pessoas</ModalService>
              <ModalButton>Adicionar ao carrinho - R$60,90</ModalButton>
            </div>
          </ModelContent>
        </Modal>
      )}
    </>
  )
}

export default Product
