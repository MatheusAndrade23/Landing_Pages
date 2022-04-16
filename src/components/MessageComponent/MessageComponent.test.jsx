import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MessageComponent } from '.';

describe('<MessageComponent />', () => {
  it('should render', () => {
    const ThemeSwitcher = () => {};

    const { container } = renderTheme(
      <MessageComponent text="um texto qualquer" />,
    );
    expect(container).toMatchSnapshot();
  });
});
