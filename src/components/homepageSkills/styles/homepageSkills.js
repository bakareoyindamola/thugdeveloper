import styled from 'styled-components/macro';
import { variables } from "../../../constant/variables";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 9.18rem;
  @media screen and (max-width: 860px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const Pane = styled.div`
  max-width: 570px;
  width: 100%;
  margin: 0 2rem 0 0;
  @media screen and (max-width: 860px) {
    margin: 0 0 3rem 0;
  }
`;

export const CardsWrapper = styled.div`
  max-width: 513px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 4.5rem;
  @media screen and (max-width: 860px) {
    max-width: 100%;
    grid-row-gap: 1.5rem;
  }
`;

export const Card = styled.div`
  padding: 1.187rem 0;
  text-align: center;
  background: ${({ theme }) => theme.skillCard };
  border-radius: ${variables.skillCardRadius};
  opacity: 0;
  transform: translateY(20px);
  @media(hover: hover) and (pointer: fine) {
    &:hover {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto .5rem;
`;

export const SkillPicture = styled.div``;
