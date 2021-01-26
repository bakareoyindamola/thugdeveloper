import styled from 'styled-components/macro';
import { variables } from "../../../constant/variables";

export const Container = styled.section`
  position: relative;
  overflow: hidden;
  &.work {
    padding: 3.5rem;
    background-color: ${({ theme }) => theme.card };
    border-radius: ${variables.workCardRadius};
    @media screen and (max-width: 1225px) {
      padding: 1.5rem;
    }
  }
`;

export const Inner = styled.div`
  &.flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 960px) {
      flex-direction: column-reverse;
      align-items: start;
    }
  }
`;

export const Pane = styled.div`
  position: relative;
  overflow: hidden;
  &.text-wrapper {
    max-width: 460px;
    width: 100%;
    @media screen and (max-width: 960px) {
      max-width: 100%;
    }
  }
  &.image-wrapper {
    max-width: 472px;
    width: 100%;
    @media screen and (max-width: 1150px) {
      max-width: 372px;
    }
    @media screen and (max-width: 960px) {
      max-width: 100%;
      margin-bottom: 2rem;
    }
  }
  &.skill-wrapper {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
  }
`;

export const Element = styled.div`
  position: relative;
  overflow: hidden;
  &.name {
    height: 37px;
    width: 50%;
    background-color: ${({ theme }) => theme.text };
    margin-bottom: 1.5rem;
    border-radius: 10px;
  }
  &.paragraph {
    width: 100%;
    height: 16px;
    background-color: ${({ theme }) => theme.text };
    margin-bottom: .5rem;
    border-radius: 4px;
  }
  &.skill {
    height: 40px;
    width: 25%;
    background-color: ${({ theme }) => theme.text };
    margin-right: 1rem;
    border-radius: 10px;
  }
  &.thumbnail {
    height: 420px;
    background-color: ${({ theme }) => theme.text };
    border-radius: ${variables.workCardRadius};
    @media screen and (max-width: 960px) {
      height: 220px;
    }
  }
`;

export const AnimationWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: loading 1.5s infinite;

  @keyframes loading {
    0% {
       transform: translateX(-150%);
    }
    50% {
       transform: translateX(-60%);
    }
    100% {
       transform: translateX(150%);
    }
  }
`;

export const Animation = styled.div`
  width: 50%;
  height: 100%;
  background-image: linear-gradient(90deg, rgba(255,255,255, 0), rgba(255,255,255, 0.6), rgba(255,255,255, 0));
  box-shadow: 0 0 30px 30px rgba(225, 225, 225, 0.05);
  transform: skewX(-20deg);
`;

