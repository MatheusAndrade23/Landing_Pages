import P from 'prop-types';
import * as Styled from './styles';

import { useState } from 'react';

import config from '../../config';

import { SectionBackground } from '../../components/SectionBackground';
import { ThemeSwitcherButton } from '../../components/ThemeSwitcherButton';

export const LoginPage = ({ themeSwitcher }) => {
  const [loginControl, setLoginControl] = useState(false);

  const OtherAction = (e) => {
    e.preventDefault();
    setLoginControl((control) => !control);
  };

  return (
    <Styled.Container>
      <Styled.Form
        action={`${config.linkApi}/${loginControl ? 'register' : 'login'}`}
        method="POST"
      >
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
        <Styled.InputSubmit
          type="submit"
          value={loginControl ? 'Registrar' : 'Fazer Login'}
        />
        <Styled.Or>ou</Styled.Or>
        <Styled.OtherAction>
          <p>
            {loginControl ? 'Já possui uma conta?' : 'Não possui uma conta?'}
          </p>
          <button onClick={OtherAction}>
            {loginControl ? 'Fazer login' : 'Registrar'}
          </button>
        </Styled.OtherAction>
      </Styled.Form>
      <ThemeSwitcherButton themeSwitcher={themeSwitcher} />
    </Styled.Container>
  );
};

LoginPage.propTypes = {
  themeSwitcher: P.func,
};
