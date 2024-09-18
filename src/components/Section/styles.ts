import styled from 'styled-components'
import { Card } from '../ProductHome/styles'

export const Container = styled.section`
  ${Card} {
    width: 380px;
    height: 306px;
  }

  p {
    font-size: 12px;
    line-height: 16px;
    max-width: 640px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
