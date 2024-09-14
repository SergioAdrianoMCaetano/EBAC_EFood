import styled from 'styled-components'
import { Card } from '../ProductHome/styles'

export const Container = styled.section`
  padding: 32px 0;

  ${Card}

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
