import styled from 'styled-components'

import imagemFundo from '../../assets/images/imagemDeHeader.png'

import { cores } from '../../styles'

export const ImagemDeHeader = styled.div`
  background-image: url(${imagemFundo});
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-top: 0;
  margin-bottom: 32px;

  @media (max-widht: 425px) {
    margin-top: 0;
    padding-top: 0;
  }
`

export const Title = styled.h2`
  text-align: start;
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 900px;
  margin-left: 324px;
  margin-top: 100px;

  @media (max-width: 425px) {
    text-align: center;
    font-size: 28px;
  }
`
export const TitleH1 = styled.h1`
  text-aling: center;
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 100;
  margin-left: 324px;
  margin-bottom: 40px;
  opacity: 0.7;

  @media (max-width: 425px) {
    text-align: center;
    font-size: 28px;
  }
`
