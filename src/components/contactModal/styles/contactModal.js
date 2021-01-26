import styled from 'styled-components/macro';
import { Form as FormikForm, Field } from 'formik';

export const Container = styled.section`
  position: fixed;
  max-width: 540px;
  width: 100%;
  top: 0;
  bottom: 0;
  right: -540px;
  opacity: 0;
  background: white;
  z-index: 1001;
  overflow-y: scroll;
`;

export const Inner = styled.div`
  height: 100%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: padding .2s ease-in-out;
  @media screen and (max-width: 515px) {
    padding: 2rem;
  }
  @media screen and (max-width: 450px) {
    padding: 1.5rem;
  }
`;

export const Pane = styled.div``;

export const HeaderText = styled.h4`
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 2.875rem;
  margin-bottom: 1.5rem;
  span {
    margin-left: 1rem;
  }
`;

export const Form = styled(FormikForm)`
  margin-top: 2rem;
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: .5rem;
  @media screen and (max-width: 515px) {
    grid-template-columns: 100%;
  }
`;

export const Label = styled.label`
  display: inline-block;
  width: 100%;
  &.select {
    margin: .5rem auto;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  padding: .937rem 1.43rem;
  background: #F2F2F2;
  border-radius: 10px;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #333333;
  outline: none;
  border: 1px solid #F2F2F2;
  resize: none;
  transition: all .2s ease-in-out;
  &::placeholder {
    color: #BDBDBD;
  }
  &:active,
  &:focus {
    background: #FFF;
    border: 1px solid #BDBDBD;
  }
`;

export const ButtonWrapper = styled.div`
  max-width: 127px;
  margin-top: 1.5rem;
`;

export const Footer = styled.footer``;

export const Link = styled.a``;

export const CancelWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 10px;
  right: 10px;
  padding: .6rem;
  border-radius: 10px;
  background: #F2F2F2;
  z-index: 1002;
  cursor: pointer;
`;

