import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  width: 82px;
  height: 24px;
  background-color: ${cores.vermelhoSuave};
  color: ${cores.laranjaClarinho};
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  margin-left: 8px;
  margin-bottom: 10px;
  cursor: pointer;
`
export const ButtonLinkHome = styled(Link)`
  width: 82px;
  height: 24px;
  background-color: ${cores.vermelhoSuave};
  color: ${cores.laranjaClarinho};
  border: none;
  border-radius: 4px;
  margin-top: 16px;
  margin-left: 8px;
  margin-bottom: 4px;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  padding: 8px;
`
