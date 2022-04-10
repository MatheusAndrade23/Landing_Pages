import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './DefaultTheme';

export const renderTheme = (children) => {
  return render(<ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>);
};
