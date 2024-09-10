import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

import BotaoAdicionarCarrinho from '../Button'

export const Card = styled.div`
  padding: 4px;
  width: 320px;
  height: 360px;
  background-color: ${cores.vermelhoSuave};
  margin-bottom: 32px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  text-align: center;

  .image-container {
    position: relative;
    width: 304px;
    height: 168px;

    .main-image {
      top: 8px;
      width: 304px;
      height: 168px;
      transition: transform 0.3s ease-in-out;
    }
  }

  .zoom-icon {
    position: absolute;
    // transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3 ease-in-out;
  }

  // &:hover .main-image {
  //   transform: scale(0.9);
  // }

  &:hover .zoom-icon {
    opacity: 0.5;
    transform: scale(0.9);
    transition: opacity 0.3 ease-in-out;
  }

  img {
    position: relative;
    padding-top: 2px;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    margin: 8px;
  }
`
export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: block;
  text-align: left;
  margin-left: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  color: ${cores.laranjaClaro};
`
export const Descricao = styled.p`
  color: ${cores.laranjaClaro};
  font-size: 14px;
  text-align: left;
  margin-left: 8px;
  line-height: 22px;
  margin-bottom: 8px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Button = styled.button`
  width: 304px;
  height: 24px;
  margin-top: 20px;
  background-color: ${cores.laranjaClarinho};
  color: ${cores.vermelhoSuave};
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  border: 0;
  border-radius: 2px;
  cursor: pointer;
`

export const ModelContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 32px;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ModalTitle = styled.h4`
  font-size: 18px;
  color: ${cores.branco};
  margin-bottom: 24px;
`

export const ModalDescription = styled.p`
  font-size: 14px;
  color: ${cores.branco};
  margin-right: 32px;
`

export const ModalService = styled.p`
  margin-top: 32px;
  font-size: 14px;
  color: ${cores.branco};
`

export const ModalImagem = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 8px;
  margin: 32px;
  object-fit: cover;
`
export const ModalButton = styled.button`
  width: 218px;
  height: 24px;
  margin-top: 20px;
  background-color: ${cores.laranjaClarinho};
  color: ${cores.vermelhoSuave};
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  border: 0;
  border-radius: 2px;
  cursor: pointer;
`

// export const Action = styled.div`
//   positivon: absolute;
//   top: 0;
//   lef: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.73);
// `

// export const ImgZoom = styled.img`
//   position: absolute;
//   top: 50%;
// `
