import styled from 'styled-components/macro';
import { NavLink as ReactNavLink } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  z-index: 998;
  width: 100%;
  min-height: 100vh;
  padding-top: 106px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.body };
  transform: translateY(-100vh);
  opacity: 0;
`

export const Inner = styled.nav`
  overflow-y: hidden;
  padding: 1rem 2rem;
`;

export const ListWrapper = styled.ul``;

export const List = styled.li`
  opacity: 0;
  transform: translateY(60px);
  border-bottom: 1px solid ${({ theme }) => theme.line };
`;

export const Link = styled(ReactNavLink)`
  display: block;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 1rem 0;
  color: ${({ theme }) => theme.text };
`;

export const Button = styled.button`
  padding: 1rem 0;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.text };
  background: transparent;
  cursor: pointer;
  width: 100%;
  text-align: left;
`;


