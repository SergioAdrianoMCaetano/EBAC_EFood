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

  a {
    color: ${cores.vermelhoSuave};
    text-decoration: none;
    font-weight: bold;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    padding: 16px;
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 0;

  @media (max-width: 425px) {
    margin-bottom: 16px;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;
  text-align: left;

  @media (max-width: 425px) {
    margin-right: 8px;
  }
`
export const LogoImg = styled.img`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  @media (max-width: 425px) {
    margin-bottom: 16px;
  }
`

export const LinkCart = styled.a`
  color: ${cores.vermelhoSuave};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 8px;

  img {
    background-color: ${cores.vermelhoSuave};
    margin-left: 16px;
  }

  @ media (max-width: 425px) {
    img {
      margin-left: 8px;
    }
  }
`
