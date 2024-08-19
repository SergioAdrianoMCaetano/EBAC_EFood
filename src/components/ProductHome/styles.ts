import styled from 'styled-components'
import { cores } from '../../styles'

export const CardContainer = styled.div`
  background-color: ${cores.branco};
  width: 474px;
  height: 394px;
  margin-left: 164px;
  margin-bottom: 48px;
  border: solid 1px ${cores.vermelhoSuave};
  position: relative;

  .container {
    display: flex;
    justify-content: center;
    width: 100%;

    img {
      max-width: 100%;
    }
  }

  .tag {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  @media (max-width: 425px) {
    max-width: 75%;
    height: 100%;
    margin-left: 0;
    margin-right: 0;

    .tag {
      top: 5px;
      right: 5px;
    }

    .container2 {
      margin-bottom: 16px;
    }
  }
`

export const Card = styled.div`
  margin-top: 10px;
  width: 100%;
  max-width: 472px;
  height: auto;
  align-items: center;

  @media (max-width: 425px) {
    max-width: 100%;
  }
`

export const TituloHome = styled.h3`
  font-weight: bold;
  display: block;
  margin-left: 8px;

  @media (max-width: 425px) {
    font-size: 14px;
    margin-left: 4px;
  }
`

export const ImgH2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 4px;

  @media (max-width: 425px) {
    margin-left: 0;
  }
`

export const ImgStar = styled.div`
  display: flex;
  gap: 5px;
  margin-right: 8px;
`

export const Descricao = styled.p`
  font-size: 16px;
  padding-top: 12px;
  padding-bottom: 4px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 16px;

  @media (max-width: 425px) {
    padding-top: 8px;
    margin-left: 4px;
    margin-bottom: 24px;
    font-size: 14px;
  }
`
