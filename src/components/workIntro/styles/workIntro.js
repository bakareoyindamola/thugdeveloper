import styled from 'styled-components/macro';
import { variables } from "../../../constant/variables";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;

export const GithubWrapper = styled.div`
  margin-top: 1rem;
`;

export const TextWrapper = styled.div`
  max-width: 600px;
`;
