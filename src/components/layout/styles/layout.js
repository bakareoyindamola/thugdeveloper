import styled from 'styled-components/macro';

export const Container = styled.section`
  background: ${({ theme }) => theme.body};
  padding-top: 8.4rem;
  &.homepage {
    visibility: hidden;
  }
`;

export const Inner = styled.main`
  max-width: 1440px;
  margin: auto;
  padding: 0 6.5rem 0 6.623rem;
  @media screen and (max-width: 1300px) {
    padding: 0 4rem 0;
  }
  @media screen and (max-width: 1050px) {
    padding: 0 2rem 0;
  }
`;

export const Pane = styled.section`
  //padding-top: 9.2rem;
  display: grid;
  grid-row-gap: 7.5rem;
`;
