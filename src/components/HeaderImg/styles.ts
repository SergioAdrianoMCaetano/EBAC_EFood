import styled from 'styled-components'

import imagemFundo from '../../assets/images/imagemDeHeader.png'

import { cores } from '../../styles'

export const ImagemDeHeader = styled.div`
  background-image: url(${imagemFundo});
  background-repeat: no-repeat;
  background-size: cover
  background-position: center;
  width: 100vw;
  height: 240px;
  margin-top: 0;

  @media (max-widht: 375px) {
    margin-top: 0;
    padding-top: 0;
  }
`

export const Title = styled.h2`
  padding-top: 140px;
  padding-left: 160px;
  text-align: start;
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 900px;

  @media (max-width: 375px) {
    padding-top: 120px;
    padding-left: 8px;
    text-align: center;
    font-size: 28px;
  }
`
export const TitleH1 = styled.h1`
  padding-top: 20px;
  padding-left: 160px;
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 100;
  opacity: 0.7;

  @media (max-width: 375px) {
    padding-left: 40px;
    text-align: left;
    font-size: 28px;
  }
`
