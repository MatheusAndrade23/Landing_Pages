import P from 'prop-types';
import * as Styled from './styles';

import config from '../../config';

import { SectionBackground } from '../../components/SectionBackground';
import { ThemeSwitcherButton } from '../../components/ThemeSwitcherButton';
import { Heading } from '../../components/Heading';

export const LoginPage = ({ themeSwitcher }) => {
  return (
    <>
      <Styled.Container>
        <Styled.Form action={`${config.linkApi}/login`} method="POST">
          <Styled.TitleLogin>LP Generator</Styled.TitleLogin>
          <Styled.Label htmlfor="user">Usuário:</Styled.Label>
          <Styled.Input
            type="text"
            name="user"
            placeholder="Digite seu usuário"
          />
          <Styled.Label htmlfor="password">Senha:</Styled.Label>
          <Styled.Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <Styled.InputSubmit type="submit" value="Fazer Login" />
        </Styled.Form>
        <ThemeSwitcherButton themeSwitcher={themeSwitcher} />
      </Styled.Container>
    </>
  );
};

LoginPage.propTypes = {
  themeSwitcher: P.func,
};
