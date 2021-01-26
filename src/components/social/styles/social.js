import styled from 'styled-components/macro';
import { variables } from "../../../constant/variables";

export const Container = styled.section`
  text-align: center;
  opacity: 0;
  transform: translateY(60px);
`;

export const Wrapper = styled.div`
  max-width: 934px;
  margin: 6rem auto 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 4rem;
  opacity: 0;
  transform: translateY(60px);
  @media screen and (max-width: 950px) {
    grid-column-gap: 2rem;
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: 100%;
    grid-row-gap: 1rem;
  }
`;

export const TextWrapper = styled.div`
  max-width: 441px;
  margin: auto;
`;

export const Pane = styled.a`
  display: block;
  height: 258px;
  padding-top: 5.81rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.banner };
  border-radius: ${variables.bannerRadius};
  ${({ social }) => social === "twitter" && `background: linear-gradient(252.24deg, #1797DF 16.06%, #076AA2 99.15%);`};
  ${({ social }) => social === "instagram" && `background: linear-gradient(97.59deg, #FFC876 -5.99%, #FF008A 134.55%);`};
  svg {
    max-width: 100%;
  }
`;

export const CardText = styled.p`
  font-weight: normal;
  font-size: 2rem;
  line-height: 1.5rem;
  color: #FFF;
`;
