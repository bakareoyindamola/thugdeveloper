import styled from 'styled-components/macro';
import { variables } from "../../../constant/variables";


export const Container = styled.div`
  max-width: 155px;
  text-align: center;
  border-radius: ${variables.workCardRadius};
  background-color: ${({ theme }) => theme.card };
  padding: 1.5rem 2.125rem;
  .loader {
    fill: ${({ theme }) => theme.text };
    margin-bottom: .5rem;
  }
  @media screen and (max-width: 540px) {
    max-width: 100%;
    margin-top: 1rem;
  }
`;

export const NumberText = styled.h4`
  font-size: 4rem;
  line-height: 4.5rem;
  color: ${({ theme }) => theme.number };
`;

export const NumberParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.125rem;
  text-align: center;
`;
