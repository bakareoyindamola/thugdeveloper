import styled from 'styled-components/macro';

export const Container = styled.button`
  display: flex;
  align-items: center;
  padding: .937rem 1.5rem;
  width: 100%;
  background: linear-gradient(97.59deg, #FFC876 -5.99%, #FF008A 134.55%);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #FFF;
  transition: all .3s ease-in-out;
  cursor: pointer;
  svg {
    margin-left: 1rem;
  }
  @media(hover: hover) and (pointer: fine) {
    &:hover {
      background: linear-gradient(97.59deg, #FFC876 -5.99%, #FF008A 134.55%);
    }
  }
`;
