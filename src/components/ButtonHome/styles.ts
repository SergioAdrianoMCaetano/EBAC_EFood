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

  @media (max-width: 768px) {
    width: 72px;
    height: 22px;
    font-size: 14px;
    margin-top: 8px;
    margin-left: 6px;
    margin-bottom: 8px;
  }

  @media (max-width: 435px) {
    width: 62px;
    height: 20px;
    font-size: 12px;
    margin-top: 6px;
    margin-left: 4px;
    margin-bottom: 6px;
  }
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
  font-weight: 700;
  padding: 8px;

  @media (max-width: 768px) {
    width: 72px;
    height: 22px;
    font-size: 14px;
    margin-top: 12px;
    margin-left: 6px;
    margin-bottom: 3px;
    padding: 6px;
  }

  @media (max-width: 435px) {
    width: 62px;
    height: 20px;
    font-size: 12px;
    margin-top: 10px;
    margin-left: 4px;
    margin-bottom: 2px;
    padding: 4px;
  }
`
