import styled from 'styled-components/macro';

export const Container = styled.footer`
  margin-top: 6.187rem;
  border-top: 1px solid ${({ theme }) => theme.line };
  padding: 2.5rem 0;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 530px) {
    flex-direction: column-reverse;
  }
`;

export const Wrapper = styled.div`
  &.bottom {
    @media screen and (max-width: 530px) {
      margin-bottom: 2rem;
    }
  }
`;

export const Pane = styled.div``;

export const HeaderText = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const Paragraph = styled.p`
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.footerText };
  margin-top: 8px;
`;

export const Link = styled.a`
  display: inline-block;      
  color: ${({ theme }) => theme.footerText };
  margin-top: 8px;
`;

