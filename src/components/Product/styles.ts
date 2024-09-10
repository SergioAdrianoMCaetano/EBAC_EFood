import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

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

  img {
    position: relative;
    padding: 8px;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    margin: 8px;
  }

  @media (max-width: 435px) {
    width: 100%;
    height: auto;
    padding: 2px;

    .image-container {
      width: 100%;
      height: auto;

      .main-image {
        margin-left: 0;
        width: 100%;
        height: auto;
      }
    }

    .zoom-icon {
      width: 100%;
      height: auto;
    }
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

  @media (max-width: 435px) {
    font-size: 14px;
    margin-left: 4px;
    margin-top: 4px;
    margin-bottom: 4px;
  }
`

export const Descricao = styled.p`
  color: ${cores.laranjaClaro};
  font-size: 14px;
  text-align: left;
  margin-left: 8px;
  line-height: 22px;
  margin-bottom: 8px;

  @media (max-width: 435px) {
    font-size: 12px;
    text-align: left;
    margin-left: 4px;
    margin-bottom: 4px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  @media (max-width: 435px) {
    top: 8px;
    right: 8px;
  }
`

export const Button = styled.button`
  width: 304px;
  height: 24px;
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: ${cores.laranjaClarinho};
  color: ${cores.vermelhoSuave};
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 435px) {
    width: 98%;
    height: 24px;
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 8px;
  }
`

export const ModelContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 32px;

  @media (max-width: 435px) {
    flex-direction: column;
    gap: 16px;
  }
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 435px) {
    flex-direction: column;
  }
`

export const ModalTitle = styled.h4`
  font-size: 18px;
  color: ${cores.branco};
  margin-bottom: 24px;

  @media (max-width: 425px) {
    font-size: 16px;
    margin-bottom: 12px;
  }
`

export const ModalDescription = styled.p`
  font-size: 14px;
  color: ${cores.branco};
  margin-right: 32px;

  @media (max-width: 425px) {
    font-size: 12px;
    margin-right: 16px;
  }
`

export const ModalService = styled.p`
  margin-top: 32px;
  font-size: 14px;
  color: ${cores.branco};

  @media (max-width: 425px) {
    font-size: 12px;
    margin-top: 16px;
  }
`

export const ModalImagem = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 8px;
  margin: 32px;
  object-fit: cover;
  padding-top: 8px;

  @media (max-width: 435px) {
    width: 100%;
    height: auto;
    margin: 16px;
  }
`

export const ModalButton = styled.button`
  width: 50%;
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

  @media (max-width: 435px) {
    width: 75%;
    height: 24px;
    font-size: 12px;
    padding: 4px;
  }
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
