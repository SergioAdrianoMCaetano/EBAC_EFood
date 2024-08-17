import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: #FFEBD9
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 32px 0 0;
  width: 100%;

  .container {
    background-color: #FFEBD9
  }
`

export const Logo = styled.div`
  img {
    width: 100px;
    padding-top: 40px;
    padding-bottom: 32px;
  }
`

export const SocialIcons = styled.div`
  margin: 20px 0;
  cursor: pointer;

  img {
    width: 90px; /* Ajuste o tamanho conforme necessário */
  }
`

export const FooterText = styled.p`
  padding-top: 40px;
  padding-bottom: 32px;
  font-size: 14px;
  color: ${cores.vermelhoSuave};
`
