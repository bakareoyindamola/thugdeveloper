import styled from 'styled-components/macro';
import { variables } from "../../../constant/variables";
import { Link as ReactLink } from 'react-router-dom';

export const Container = styled.section``;

export const ProjectWrapper = styled.main`
  margin-top: 5.5rem;
  display: grid;
  grid-row-gap: 7.5rem;
`;

export const Project = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ direction }) => `flex-direction: ${direction};`};
  @media screen and (max-width: 680px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const ProjectDetails = styled.div`
  max-width: 460px;
  width: 100%;
  ${({ direction }) => direction === "row" && `margin-left: 2rem`};
  ${({ direction }) => direction === "row-reverse" && `margin-right: 2rem`};
  @media screen and (max-width: 680px) {
    max-width: 100%;
    ${({ direction }) => direction === "row" && `margin-left: 0`};
    ${({ direction }) => direction === "row-reverse" && `margin-right: 0`};
  }
`;

export const ImageWrapper = styled.div`
  opacity: 0;
  max-width: 612px;
  width: 100%;
  height: 422px;
  background: ${({ theme }) => theme.banner};
  border-radius: ${variables.bannerRadius};
  overflow: hidden;
  @media screen and (max-width: 680px) {
    height: 250px;
    margin-bottom: 1rem;
  }
`;

export const Picture = styled.picture`
  width: 100%;
  height: 100%;
  border-radius: ${variables.bannerRadius};
`;

export const ImageSource = styled.source``

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${variables.bannerRadius};
  transition: transform .5s ease;
  @media(hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const ProjectName = styled.h5`
  opacity: 0;
  text-transform: capitalize;
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.312rem;
  margin-bottom: 2.5rem;
  @media screen and (max-width: 680px) {
    margin-bottom: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  opacity: 0;
  max-width: 204px;
  margin-top: 2rem;
  @media screen and (max-width: 680px) {
    margin-top: 1rem;
  }
`
export const Link = styled(ReactLink)`
  display: flex;
  align-items: center;
  padding: .937rem 1.5rem;
  width: 100%;
  background: linear-gradient(97.59deg, #FFC876 -5.99%, #FF008A 134.55%);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #FFF;
  transition: all .3s ease-in-out;
  cursor: pointer;
  svg {
    margin-left: 1rem;
  }
  @media(hover: hover) and (pointer: fine) {
    &:hover {
      background: linear-gradient(97.59deg, #FFC876 -5.99%, #FF008A 134.55%);
    }
  }
`;
