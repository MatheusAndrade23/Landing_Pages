import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridImage } from '.';

import mock from './mock';

describe('<GridImage />', () => {
  it('should render the GridImage with background', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render the GridImage without component', () => {
    const { container } = renderTheme(
      <GridImage {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});