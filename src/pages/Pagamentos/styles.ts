import styled from 'styled-components'
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

export const PaymentContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const SideBarPayment = styled.aside`
  background-color: ${cores.vermelhoSuave};
  padding: 32px 8px;
  z-index: 2;
  width: 360px;
  height: 100%;

  @media (max-width: 1024px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    width: 50%;
    margin-left: 50%;
    padding: 16px 8px;
  }

  @media (max-width: 435px) {
    padding: 8px 4px;
  }
`

export const PaymentContent = styled.div`
  display: flex;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 18px;
  margin-top: 8px;

  div {
    flex: 1;
  }

  label {
    display: block;
    margin-bottom: 4px;
    color: ${cores.laranjaClaro};
  }

  input {
    background-color: ${cores.branco};
    border: 1px solid ${cores.branco};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`

export const InputGroup = styled.div`
  label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 12px;
    margin-top: 12px;
    display: block;
    color: ${cores.laranjaClaro};
  }

  input {
    background-color: ${cores.branco};
    border: 1px solid ${cores.branco};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }

  @media (max-width: 768px) {
    label {
      font-size: 12px;
    }

    input {
      height: 28px;
    }
  }

  @media (max-width: 435px) {
    label {
      font-size: 10px;
    }

    input {
      height: 24px;
    }
  }
`
export const PaymentButton = styled.div`
  margin-top: 24px;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 16px;
  }

  @media (max-width: 435px) {
    margin-top: 12px;
  }
`
export const PricePayment = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 435px) {
    font-size: 18px;
  }
`
