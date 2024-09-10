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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    padding: 16px;
  }
`

export const LogoImg = styled.img`
  margin-top: 64px;
  align-items: center;

  @media (max-width: 425px) {
    margin-bottom: 16px;
    margin-top: 0;
  }
`

export const TituloContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const TituloHome = styled.h2`
  color: #e66767;
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  margin-top: 64px;

  @media (max-width: 425px) {
    font-size: 16px;
    text-align: center;
    margin-top: 36px;
  }
`
