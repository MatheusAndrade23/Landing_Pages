import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    background-color: ${theme.colors.white};
    padding: 0 40px;
    width: max-content;
    z-index: 10;
    border: 2px solid ${theme.colors.secondaryColor};
    border-radius: 10px;

    top: 70px;
    right: 20px;
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    font-style: bold;
    font-family: ${theme.fonts.family.secondary};
  `}
`;
