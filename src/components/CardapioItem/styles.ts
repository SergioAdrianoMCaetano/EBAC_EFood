import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ImagemRestaurante = styled.img`
  width: 304px;
  height: 168px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`

export const CardRestaurante = styled.div`
  width: 380px;
  height: 306px;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`

export const TituloRestaurante = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  text-align: left;
  margin-left: 8px;
  margin-top: 0;
  margin-bottom: 8px;
  color: ${cores.laranjaClaro};

  @media (max-width: 768px) {
    font-size: 14px;
    margin-left: 4px;
    margin-bottom: 4px;
  }

  @media (max-width: 435px) {
    font-size: 12px;
    margin-left: 2px;
    margin-bottom: 2px;
  }
`

export const DescricaoRestaurante = styled.p`
  color: ${cores.laranjaClaro};
  font-size: 24px;
  text-align: left;
  margin-left: 8px;
  line-height: 22px;
  margin-bottom: 18px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-left: 4px;
    margin-bottom: 12px;
  }

  @media (max-width: 435px) {
    font-size: 12px;
    margin-left: 2px;
    margin-bottom: 8px;
  }
`
