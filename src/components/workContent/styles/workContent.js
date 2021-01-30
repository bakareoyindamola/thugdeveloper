import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import {variables} from "../../../constant/variables";

export const Container = styled.section`
  display: grid;
  grid-gap: 2.5rem;
`;

export const LinkWrapper = styled(ReactRouterLink)`
  cursor: pointer;
`;

export const Inner = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${variables.bannerRadius};
  padding: 3.625rem 3.5rem;
  background-color: #5C3737;
  ${({ direction }) => direction && `flex-direction: row-reverse;`};
  ${({ color }) => color && `background-color: #074E65;`};
  @media screen and (max-width: 1225px) {
    padding: 1.5rem;
  }
  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
    align-items: start;
  }
`;

export const ProjectWrapper = styled.div`
  max-width: 460px;
  width: 100%;
  margin-right: 2.5rem;
  ${({ direction }) => direction && `margin-left: 2.5rem;`};
  @media screen and (max-width: 960px) {
    max-width: 100%;
    margin: 0;
  }
`;

export const ProjectName = styled.h4`
  font-size: 2rem;
  line-height: 2.3125rem;
  margin-bottom: 2rem;
  color: #FFF;
`;

export const ProjectDetails = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.workDetails };
  margin-bottom: 1.5rem;
`;

export const Pane = styled.div`
  display: flex;
  max-width: 400px;
  flex-wrap: wrap;
`;

export const SkillWrapper = styled.div`
  padding: .5rem 1rem;
  border-radius: 10px;
  border: 1px solid #F2F2F2;
  margin: 0 1rem 1rem 0;
  &:last-of-type {
    margin-right: 0;
  }
`;

export const SkillText = styled.p`
  font-size: 1rem;
  line-height: 2rem;
  color: #FFF;
`;

export const ImageWrapper = styled.div`
  max-width: 472px;
  width: 100%;
  height: 420px;
  border-radius: ${variables.bannerRadius};
  object-fit: cover;
  @media screen and (max-width: 960px) {
    max-width: 100%;
    margin-bottom: 2rem;
    height: 220px;
  }
`;

export const Picture = styled.picture`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${variables.bannerRadius};
  }
`;

export const ImageSource = styled.source``;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${variables.bannerRadius};
`;
