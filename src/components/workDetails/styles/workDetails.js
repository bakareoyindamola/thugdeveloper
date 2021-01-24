import styled from 'styled-components/macro';
import { variables } from "../../../constant/variables";

export const Container = styled.section``;

export const TextWrapper = styled.div`
  max-width: 611px;
  margin-bottom: 5rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 536px;
  display: flex;
  align-items: flex-end;
  padding: 3.5rem;
  border-radius: ${variables.bannerRadius};
  margin-bottom: 4.125rem;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  background: linear-gradient(360deg, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0) 100%);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: ${variables.bannerRadius};
  z-index: 2;
`;

export const Picture = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: ${variables.bannerRadius};
`;

export const ImageSource = styled.source``;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${variables.bannerRadius};
  transition: transform .8s ease;
  @media(hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const SkillWrapper = styled.div`
  position: relative;
  display: flex;
  z-index: 4;
`;

export const Skill = styled.div`
  margin-right: 1rem;
  padding: .5rem 1rem;
  background-color: #FFF;
  border-radius: 10px;
  &:last-of-type {
    margin-right: 0;
  }
`;

export const SkillText = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  color: #333333;
`;

export const InfoWrapper = styled.section``;

export const ResultWrapper = styled.section`
  max-width: 611px;
  margin: 0 auto 7.5rem;
  text-align: center;
`;

export const ResultText = styled.h4`
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const GalleryContainer = styled.section`
  background-color: ${({ theme }) => theme.banner };
  margin-bottom: 7.5rem;
`;

export const GalleryInner = styled.div`
  max-width: 1440px;
  background-color: ${({ theme }) => theme.banner };
  margin: auto;
  padding: 8.25rem 6.5rem 8.25rem 6.623rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  @media screen and (max-width: 1300px) {
    padding: 8.25rem 4rem 8.25rem;
  }
  @media screen and (max-width: 1050px) {
    padding: 8.25rem 2rem 8.25rem;
  }
`;

export const GalleryImageWrapper = styled.div`
  height: 420px;
  background: #DFDFDF;
  border-radius: ${variables.bannerRadius};
  overflow: hidden;
  object-fit: cover;
`;

export const GalleryPicture = styled.picture`
  border-radius: ${variables.bannerRadius};
`;


