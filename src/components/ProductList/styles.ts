import styled from 'styled-components'

export const ProductContainer = styled.section`
  padding: 32px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const List = styled.ul`
  display: grid;
  column-gap: 32px;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
