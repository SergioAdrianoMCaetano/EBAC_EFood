import styled from 'styled-components'

export const ContainerHome = styled.section`
  padding: 164px;
  padding-top: 40px;
  padding-bottom: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 435px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr;
    align-items: center;
    padding: 60px;
  }
`

export const ListHome = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: 435px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr;
    align-items: center;
  }
`
