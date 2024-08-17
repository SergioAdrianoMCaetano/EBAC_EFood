import styled from 'styled-components'

export const ContainerHome = styled.section``

export const ListHome = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
