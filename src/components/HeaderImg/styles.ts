import styled from 'styled-components'

import imagemFundo from '../../assets/images/imagemDeHeader.png'

import { cores } from '../../styles'

export const ImagemDeHeader = styled.div`
  background-image: url(${imagemFundo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: left;
  margin-top: 0;
  margin-bottom: 32px;
  margion-left: 0;

  .container {
    margin-left: 0;
  }

  @media (max-width: 768px) {
    height: 200px;
    margin-bottom: 24px;
  }

  @media (max-width: 425px) {
    height: 160px;
    margin-bottom: 16px;
    padding-top: 0;
  }
`

export const Title = styled.h2`
  display: flex;
  justify-content: left;
  text-align: center;
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 900;
  margin-top: 80px;
  margin-left: 160px;

  @media (width: 2560px) {
    margin-left: 764px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-left: 16px;
    margin-top: 80px;
  }

  @media (max-width: 425px) {
    text-align: center;
    font-size: 24px;
    margin-left: 16px;
    margin-top: 60px;
  }
`

export const TitleH1 = styled.h1`
  display: flex;
  justify-content: left;
  text-align: left;
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 100;
  margin-left: 160px;
  margin-bottom: 40px;
  opacity: 0.7;

  @media (width: 2560px) {
    margin-left: 764px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-left: 16px;
    margin-bottom: 30px;
  }

  @media (max-width: 425px) {
    text-align: center;
    font-size: 24px;
    margin-left: 16px;
    margin-bottom: 20px;
  }
`
