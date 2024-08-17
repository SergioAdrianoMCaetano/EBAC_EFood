import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'

export const HeaderBar = styled.div`
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  padding: 24px;
  border-radius: 16px;
  height: max;
  margin-bottom: 80px;

  @media (max-width: 375px) {
    flex-direction: column;
    padding: 16px;
  }
`

export const LogoImg = styled.img`
  display: flex;
  margin-left: 600px;
  margin-top: 64px;
  align-items: center;

  @media (max-width: 375px) {
    margin-bottom: 16px;
    margin-left: 112px;
  }
`

export const TituloContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const TituloHome = styled.h2`
  display: block;
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  margin-top: 64px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 375px) {
    font-size: 16px;
    text-align: center;
    margin-left: auto;
    margin-top: 36px;
  }
`
