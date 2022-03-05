import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Home from '.';
import { theme } from '../../styles/theme';

describe('<Home />', () => {
  it('Should render home', () => {
    renderTheme(<Home />);
  });
});
