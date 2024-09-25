import styled from 'styled-components'

import { breakpoints, cores } from '../../styles'

export const ImagemRestaurante = styled.img`
  width: 304px;
  height: 168px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 312px;
    height: 213px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 378px;
    height: 213px;
  }
`

export const CardRestaurante = styled.div`
  width: 380px;
  height: 306px;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: ${breakpoints.tablet}) {
    width: 380px;
    height: 306px;
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

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    margin-left: 4px;
    margin-bottom: 16;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
    margin-left: 2px;
    margin-bottom: 16px;
  }
`

export const DescricaoRestaurante = styled.p`
  color: ${cores.laranjaClaro};
  font-size: 24px;
  text-align: left;
  margin-left: 8px;
  margin-right: 8px;
  line-height: 22px;
  margin-bottom: 18px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
    margin-left: 4px;
    margin-bottom: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
    margin-left: 2px;
    margin-bottom: 16px;
  }
`
