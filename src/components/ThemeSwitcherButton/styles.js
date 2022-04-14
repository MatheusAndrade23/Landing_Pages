import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    position: fixed;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 4rem;
    bottom: 2rem;
    right: 8rem;
    z-index: 6;
    opacity: 0.7;
    cursor: pointer;
    font-weight: bold;
  `}
`;
