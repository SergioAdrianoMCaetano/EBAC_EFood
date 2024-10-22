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

export const FinishContainer = styled.div`
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

export const SideBarFinish = styled.aside`
  background-color: ${cores.vermelhoSuave};
  padding: 32px 8px;
  z-index: 2;
  width: 360px;
  height: 100%;

  @media (max-width: 1024px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    padding: 16px 8px;
    width: 50%;
    margin-left: 50%;
  }

  @media (max-width: 435px) {
    padding: 8px 8px;
    width: 50%;
    margin-left: 50%;
  }
`

export const FinishContent = styled.div`
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
export const FinishTitle = styled.h4`
  margin-bottom: 16px;
  color: ${cores.laranjaClaro};

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 435px) {
    font-size: 16px;
  }
`
export const FinashContent = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${cores.laranjaClaro};

  p {
    margin-bottom: 16px;
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
export const FinishButton = styled.div`
  margin-top: 24px;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 16px;
  }

  @media (max-width: 435px) {
    margin-top: 12px;
    width: 50%;
  }
`
export const PriceFinish = styled.div`
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
