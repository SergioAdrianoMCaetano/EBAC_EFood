import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonRestaurante = styled.button`
  width: 304px;
  height: 24px;
  background-color: ${cores.laranjaClarinho};
  color: ${cores.vermelhoSuave};
  border: none;
  border-radius: 4px;
  margin-left: 8px;
  margin-bottom: 10px;
  cursor: pointer;
`
export const ButtonLinkRestaurante = styled(Link)`
  width: 304px;
  height: 24px;
  background-color: ${cores.laranjaClarinho};
  color: ${cores.vermelhoSuave};
  border: none;
  border-radius: 4px;
  margin-top: 16px;
  margin-left: 8px;
  margin-bottom: 4px;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700px;
  padding: 8px;
`
