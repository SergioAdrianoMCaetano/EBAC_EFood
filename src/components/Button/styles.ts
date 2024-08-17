import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.vermelhoSuave};
  color: ${cores.laranjaClaro};
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.vermelhoSuave};
  color: ${cores.laranjaClaro};
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  cursor: pointer;
  text-decoration: none;
`

export const ButtonTitle = styled.h2`
  width: 70px;
  height: 16px;
  padding-top: 1256px;
  padding-left: 737px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: ${cores.laranjaClaro};
`
