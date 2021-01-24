import styled from 'styled-components/macro';
import { variables } from "../../../constant/variables";
import { Link as ReactScroll } from 'react-scroll';

export const Container = styled.header`
  position: relative;
  max-width: 1230px;
  margin: auto;
  padding: 3.62rem 3.75rem;
  background: ${({ theme }) => theme.banner};
  border-radius: ${variables.bannerRadius};
  @media screen and (max-width: 1375px) {
    padding: 3.62rem 2.75rem;
  }
`;

export const Inner = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Pane = styled.div`
  max-width: 541px;
  width: 100%;
  margin: 0 4rem 0 2.25rem;
  @media screen and (max-width: 1375px) {
    margin: 0 3rem 0 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 420px;
  border-radius: ${variables.bannerRadius};
  background: ${({ theme }) => theme.text};
  overflow: hidden;
`;

//change to picture tag and restyle
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${variables.bannerRadius};
  object-fit: cover;
`;

export const HeaderText = styled.h4`
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2.375rem;
`;

export const Paragraph = styled.p`
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2.375rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  max-width: 197px;
  width: 100%;
  bottom: -1.68rem;
`;

export const Box = styled.div`
  overflow: hidden;
  max-width: 388px;
  width: 100%;
  @media screen and (max-width: 1000px) {
    max-width: 300px;
  }
`;

export const Link = styled(ReactScroll)`
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
