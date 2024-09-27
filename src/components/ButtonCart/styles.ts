import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonCarti = styled.button`
  width: 334px;
  height: 34px;
  background-color: ${cores.laranjaClarinho};
  color: ${cores.vermelhoSuave};
  border: none;
  border-radius: 4px;
  margin-left: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  margin-right: 8px;

  @media (max-width: 768px) {
    width: 250px;
    height: 22px;
    font-size: 14px;
    margin-left: 6px;
    margin-bottom: 8px;
  }

  @media (max-width: 435px) {
    width: 200px;
    height: 34px;
    font-size: 12px;
    margin-left: 4px;
    margin-bottom: 6px;
  }
`

export const ButtonLinkCart = styled(Link)`
  width: 100%;
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
  font-weight: 700;
  padding: 8px;

  @media (max-width: 768px) {
    width: 250px;
    height: 22px;
    font-size: 14px;
    margin-top: 12px;
    margin-left: 6px;
    margin-bottom: 3px;
    padding: 6px;
  }

  @media (max-width: 435px) {
    width: 200px;
    height: 20px;
    font-size: 12px;
    margin-top: 10px;
    margin-left: 4px;
    margin-bottom: 2px;
    padding: 4px;
  }
`
