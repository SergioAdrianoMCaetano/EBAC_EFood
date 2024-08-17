import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.vermelhoSuave};
  padding: 8px;
  margin-bottom: 32px;
  border-radius: 4px;
  position: relative;
  align-items: center;

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
  margin-top: 8px;
  margin-bottom: 8px;
  color: ${cores.laranjaClaro};
`
export const Descricao = styled.p`
  color: ${cores.laranjaClaro};
  font-size: 14px;
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
  height: 32px;
  margin: 8px;
  background-color: ${cores.laranjaClarinho};
  color: ${cores.vermelhoSuave};
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
`
