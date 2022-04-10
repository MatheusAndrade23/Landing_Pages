import P from 'prop-types';
import * as Styled from './styles';

import { useState } from 'react';

export const ThemeSwitcherButton = ({ themeSwitcher }) => {
  const [themeControl, setThemeControl] = useState(false);

  const SwitchTheme = () => {
    setThemeControl((control) => !control);
    themeSwitcher();
  };

  return (
    <Styled.Container onClick={SwitchTheme}>
      {!themeControl ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
    </Styled.Container>
  );
};

ThemeSwitcherButton.propTypes = {
  themeSwitcher: P.func.isRequired,
};
