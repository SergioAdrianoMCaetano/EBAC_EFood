import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#fff',
  laranjaClaro: '#FFEBD9',
  laranjaClarinho: '#FFF8F1',
  vermelhoSuave: '#E66767'
}

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.laranjaClarinho};
    color: ${cores.vermelhoSuave}
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    padding 0 10px;
  }
`
