import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#fff',
  laranjaClaro: '#FFEBD9',
  laranjaClarinho: '#FFF8F1',
  vermelhoSuave: '#E66767'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px;',
  mobile: '435px'
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
    min-height: 100vh;
  }
`

export const Container = styled.div`
  max-width: 2560px;
  width: 100%;
  margin: 0 auto;

  // @media (max-width: ${breakpoints.desktop}) {
  //   padding: 0px 15px;
  // }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding 0 10px;
  }
`
