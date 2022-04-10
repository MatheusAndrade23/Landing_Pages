import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ThemeSwitcherButton } from '.';

describe('<ThemeSwitcherButton />', () => {
  it('should render', () => {
    const ThemeSwitcher = () => {};

    const { container } = renderTheme(
      <ThemeSwitcherButton themeSwitcher={ThemeSwitcher} />,
    );
    expect(container).toMatchSnapshot();
  });
});
