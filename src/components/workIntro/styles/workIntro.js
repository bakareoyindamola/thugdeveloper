import styled from 'styled-components/macro';
import { variables } from "../../../constant/variables";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
`;

export const Pane = styled.div`
  max-width: 155px;
  text-align: center;
  border-radius: ${variables.workCardRadius};
  background-color: ${({ theme }) => theme.card };
  padding: 1.5rem 2.125rem;
`;

export const GithubWrapper = styled.div`
  margin-top: 1rem;
`;

export const NumberText = styled.h4`
  font-size: 4rem;
  line-height: 4.5rem;
  color: ${({ theme }) => theme.number };
`;

export const NumberParagraph = styled.p`
  text-align: center;
`;

export const TextWrapper = styled.div`
  max-width: 600px;
`;
