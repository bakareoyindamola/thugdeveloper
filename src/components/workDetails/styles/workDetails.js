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
  @media screen and (max-width: 750px) {
    padding: 2.5rem;
    height: 420px;
  }
  @media screen and (max-width: 645px) {
    padding: 1.5rem;
    height: 350px;
  }
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

export const ResultWrapper = styled.section`
  margin: 3.43rem auto 7.5rem;
  text-align: center;
  padding-top: 7.5rem;
  border-top: 1px solid ${({ theme }) => theme.line };
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
  grid-gap: 1.5rem;
  ${({ layout }) => layout && `grid-template-columns: repeat(${layout}, 1fr);`};
  @media screen and (max-width: 1300px) {
    padding: 8.25rem 4rem;
  }
  @media screen and (max-width: 1050px) {
    padding: 8.25rem 2rem;
  }
  @media screen and (max-width: 800px) {
    padding: 5.25rem 2rem;
  }
  @media screen and (max-width: 680px) {
    padding: 1.5rem 2rem;
    grid-template-columns: 100%;
  }
`;

export const GalleryImageWrapper = styled.div`
  height: 420px;
  background: #DFDFDF;
  border-radius: ${variables.bannerRadius};
  overflow: hidden;
  object-fit: cover;
  }
  @media screen and (max-width: 800px) {
    height: 320px;
  }
  @media screen and (max-width: 680px) {
    height: 220px;
  }
`;

export const GalleryPicture = styled.picture`
  border-radius: ${variables.bannerRadius};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${variables.bannerRadius};
    transition: filter .15s linear, transform .8s ease;
    @media(hover: hover) and (pointer: fine) {
      &:hover {
        transform: scale(1.1);
      }
    }
`;

export const InfoWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  @media screen and (max-width: 750px) {
    margin-bottom: 1rem;
  }
`;

export const InfoPane = styled.div`
  &.info {
    display: flex;
    margin-right: 2rem;
    div {
      margin-right: 4rem;
    }
    div:last-of-type {
      margin-right: 0;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    @media screen and (max-width: 750px) {
      flex-direction: column;
      div {
        margin: 0 0 1rem 0;
      }
    }
  }
  &.contributors {
    margin-right: -1rem;
  }
`;

export const InfoText = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: .68rem;
  &.header {
    color: #828282;
    text-transform: lowercase;
  }
  &.lead-text {
    text-transform: capitalize;
  }
`;

export const Link = styled.a`
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.text };
  cursor: pointer;
`;

export const ContributorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 600px) {
    max-width: 272px;
    width: 100%;
    //justify-content: flex-end;
  }
  @media screen and (max-width: 403px) {
    justify-content: flex-end;
  }
`;

export const Contributor = styled.div`
  width: 56px;
  height: 56px;
  background: #F2F2F2;
  border-radius: 10px;
  margin: 0 1rem 1rem 0;
`;


