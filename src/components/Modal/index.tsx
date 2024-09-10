import React from 'react'
import { ModalOverlay, ModalContent, CloseButton } from './styles'

import fechar from '../../assets/images/fechar.png'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <img src={fechar}></img>
        </CloseButton>
        <div className="container">{children}</div>
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal
