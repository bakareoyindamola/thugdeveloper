import styled from 'styled-components/macro';

export const HeaderText = styled.h4`
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 2.875rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  span {
    background: linear-gradient(97.59deg, #FFC876 -5.99%, #FF008A 134.55%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &.social-card-content-animate,
  &.skill_text_animation,
  &.inspired_text_animate {
    opacity: 0;
    transform: translateY(60px);
  }
`;

export const Paragraph = styled.p`
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  &.center {
    text-align: center;
  }
  &.fadeIn {
    opacity: 0;
  }
  &.social-card-content-animate,
  &.skill_text_animation {
    opacity: 0;
    transform: translateY(60px);
  }
`;
