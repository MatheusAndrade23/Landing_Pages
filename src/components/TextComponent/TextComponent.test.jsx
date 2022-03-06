import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>Children</TextComponent>);

    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
