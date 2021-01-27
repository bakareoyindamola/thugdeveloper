import styled from 'styled-components/macro';
import {
    NavLink as ReactNavLink,
    Link as ReactLink
} from 'react-router-dom';

export const Container = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  background-color: ${({ theme }) => theme.body };
  transition: box-shadow .20s linear;
  &.active {
    box-shadow: 0 30px 60px rgba(32, 32, 32, 0.1);
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin: auto;
  padding: 3.5rem 6.5rem 2rem 6.623rem;
  @media screen and (max-width: 1300px) {
    padding: 3.5rem 4rem 2rem;
  }
  @media screen and (max-width: 1050px) {
    padding: 3.5rem 2rem 2rem;
  }
`;

export const Pane = styled.div``;

export const ListWrapper = styled.ul`
  display: flex;
  align-items: center;
`;

export const List = styled.li`
  display: inline-block;
  margin-right: 2rem;
  &:last-of-type {
    margin-right: 0;
  }
`;

export const NavLink = styled(ReactNavLink)`
  color: ${({ theme }) => theme.text };
  font-size: 1rem;
  line-height: 1.125rem;
`;

export const Link = styled(ReactLink)`
  color: ${({ theme }) => theme.text };
  font-size: 1rem;
  line-height: 1.125rem;
`;

export const NavButton = styled.button`
  font-size: 1rem;
  line-height: 1.125rem;
  padding: 0;
  background: transparent;
  color: ${({ theme }) => theme.text };
`;
