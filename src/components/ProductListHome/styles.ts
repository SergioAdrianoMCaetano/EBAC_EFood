import styled from 'styled-components'

export const ContainerHome = styled.section`
  padding: 164px;
  padding-top: 40px;
  padding-bottom: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ListHome = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
