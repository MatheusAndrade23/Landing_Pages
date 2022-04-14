import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};

    height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.secondaryColor};
    border-radius: 10px;
    padding: 20px 35px 40px 35px;

    display: flex;
    flex-direction: column;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    outline: none;
    border: 1px solid ${theme.colors.secondaryColor};
    border-radius: 5px;
    padding: 5px;
    margin: 5px 0;
    font-size: 15px;
    color: ${theme.colors.secondaryColor};
  `}
`;

export const TitleLogin = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor};
    margin: 20px auto;
  `}
`;

export const InputSubmit = styled.input`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.secondaryColor};
    border-radius: 5px;
    color: ${theme.colors.secondaryColor};
    background-color: transparent;
    cursor: pointer;
    height: 30px;
    width: 160px;
    margin: 10px auto;
    transition: 0.5s;
    font-size: 15px;

    &:hover {
      border-color: ${theme.colors.white};
      color: ${theme.colors.white};
    }
  `}
`;
