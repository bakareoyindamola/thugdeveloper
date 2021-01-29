import styled from 'styled-components/macro';
import { Form as FormikForm, Field } from 'formik';

export const Container = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 6.5rem;
  max-width: 446px;
  width: 100%;
  max-height: 65vh;
  height: 100%;
  box-shadow: rgb(227 233 243) 0 2px 4px 0;
  z-index: 997;
  border-radius: 24px;
  background-color: white;
  overflow-y: scroll;
`;

export const Inner = styled.div`
  padding: 1.5rem 2.5rem;
`;

export const HeaderText = styled.h4`
  font-size: 2.5rem;
  line-height: 2.875rem;
  margin-bottom: 1rem;
`;

export const Form = styled(FormikForm)``;

export const Label = styled.label`
  display: block;
  margin: 2rem 0 1rem;
  width: 100%;
  &:last-of-type {
    margin: 0;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  padding: .937rem 1.43rem;
  background-color: #F2F2F2;
  border-radius: 10px;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #333333;
  outline: none;
  border: 1px solid #F2F2F2;
  resize: none;
  transition: border .2s ease-in-out, background-color .2s ease-in-out;
  &::placeholder {
    color: #BDBDBD;
  }
  &:active,
  &:focus {
    background-color: #FFF;
    border: 1px solid #BDBDBD;
  }
  &.error {
    border: 1px solid #FF0000;
    background-color: #FFF;
  }
`;

export const ButtonWrapper = styled.div`
  max-width: 127px;
  margin-top: 1.5rem;
`;

export const IconWrapper = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  width: 65px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #333333;
  cursor: pointer;
`;
