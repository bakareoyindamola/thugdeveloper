import styled from 'styled-components/macro';

export const Container = styled.section`
  position: fixed;
  z-index: 10000;
  ${({ zIndex }) => zIndex && `z-index: 900;`};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  //pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Pane = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const BoxLoader = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #333333;
  border-radius: 4px;
  margin-right: 1rem;
  background-color: transparent;
  &:last-of-type {
    margin-right: 0;
  }
  &:nth-child(1){
    animation: opacityChange 1s ease-in-out infinite;
  }
  &:nth-child(2){
    animation: opacityChange 1s ease-in-out 0.30s infinite;
  }
  &:nth-child(3){
    animation: opacityChange 1s ease-in-out 0.60s infinite;
  }
  &:nth-child(4){
    animation: opacityChange 1s ease-in-out 0.30s infinite;
  }
  &:nth-child(5){
    animation: opacityChange 1s ease-in-out 0.60s infinite;
  }

  @keyframes opacityChange{
    0%, 100%{
      background-color: transparent;
    }
    60%{
      background-color: #333;
    }
  }
`;
