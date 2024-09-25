import styled from 'styled-components'
import { cores } from '../../styles'
import fundo from '../../assets/images/fundo.png'

export const HeaderBar = styled.div`
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  a {
    color: ${cores.vermelhoSuave};
    text-decoration: none;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    padding: 16px;
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 0;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    justify-content: center;
  }

  @media (max-width: 425px) {
    margin-bottom: 16px;
    justify-content: center;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;
  text-align: left;

  @media (max-width: 768px) {
    margin-right: 12px;
  }

  @media (max-width: 425px) {
    margin-right: 8px;
  }
`

export const LogoImg = styled.img`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-left: 324px;

  @media (max-width: 768px) {
    margin-bottom: 24px;
    margin-left: 0;
  }

  @media (max-width: 425px) {
    margin-bottom: 16px;
    margin-left: 0;
  }
`

export const CartButton = styled.a`
  color: ${cores.vermelhoSuave};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 324px;
  cursor: pointer;

  img {
    // background-color: ${cores.vermelhoSuave};
    margin-left: 16px;
  }

  @media (max-width: 768px) {
    margin-left: 0;

    img {
      margin-left: 12px;
    }
  }

  @media (max-width: 425px) {
    margin-left: 0;

    img {
      margin-left: 8px;
    }
  }
`
