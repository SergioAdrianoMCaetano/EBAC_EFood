import styled from 'styled-components'

export const ProductContainer = styled.section`
  padding: 32px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
