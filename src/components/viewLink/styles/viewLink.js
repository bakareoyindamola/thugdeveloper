import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ category }) => category === "mobile" && `
    @media screen and (max-width: 620px) {
        flex-direction: column;
        a { 
            margin: 0 0 1rem 0;
        }
    }
  `};
  ${({ category }) => category === "web_and_mobile" && `
    @media screen and (max-width: 900px) {
        flex-direction: column;
        a { 
            margin: 0 0 1rem 0;
        }
    }
  `};
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1.625rem;
  color: ${({ theme }) => theme.text };
  margin-right: 1.5rem;
  max-width: 391px;
  width: 100%;
  text-align: center;
  border: 1px solid #333;
  border-radius: 20px;
  &:last-child {
    margin-right: 0;
  }
  svg {
    margin-right: 1.25rem;
  }
`;
