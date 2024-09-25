import styled from 'styled-components'
import lixeira from '../../assets/images/lixeira-de-reciclagem.png'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const CartItem = styled.div`
  width: 344px;
  height: 100px;
  margin-bottom: 20px;
  background-color: ${cores.laranjaClarinho};
  display: flex;
  align-items: center;
  border-radius: 4px;
`
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-left: 0;
  justify-content: space-between;
  list-style: none;
  padding: 8px;
`
export const ItemImg = styled.img`
  display: flex;
  margin-top: 0;
  width: 80px;
  height: 80px;
  object-fit: fitt;
`
export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  margin-top: 8px;
  flex: 1;

  div {
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
    margin-top: 20px;
  }
`
export const ItemTitulo = styled.h3`
  display: flex;
  font-size: 16px;
  color: ${cores.vermelhoSuave};
  width: 140px;
  height: 28px;
  font-weight: 900px;
  font-size: 16px;
  margin: 0;
`

export const ItemPreco = styled.p`
  margin-top: 16px;
  font-size: 14px;
  font-weight: 400px;
  line-height: 22px;
  margin-bottom: 16px;
  color: ${cores.vermelhoSuave};
`
export const ImagLixeira = styled.img`
  background-image: url(${lixeira});
  width: 16px;
  height: 16px;
  border: none;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  margin-top: 76px;
  margin-left: 76px;
  cursor: pointer;
`
export const Sidebar = styled.aside`
  background-color: ${cores.vermelhoSuave};
  z-index: 1;
  padding: 32px 8px; 16px 8px;
  max-width: 360px;
  width: 100%;
`
export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.laranjaClaro};
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  display: block;
  color: ${cores.laranjaClaro};
`
