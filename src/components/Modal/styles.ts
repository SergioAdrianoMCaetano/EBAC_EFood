import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const ModalContent = styled.div`
  width: 1024px;
  height: 344px;
  background-color: ${cores.vermelhoSuave};
  font-size: 14px;
  font-weight: 400px;
  border-radius: 8px;
  position: relative;
  z-index: 2;
  border-radius: 12px;

  img {
    align-items: left;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`
