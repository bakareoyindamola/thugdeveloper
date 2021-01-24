import styled from 'styled-components';

export const GithubLink = styled.a`
  font-size: 1rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text };
  cursor: pointer;
  svg {
    margin-right: 1rem;
    fill: ${({ theme }) => theme.githubSvg };
  }
`;
