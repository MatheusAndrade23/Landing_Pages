import P from 'prop-types';
import * as Styled from './styles';

import { useState } from 'react';

import config from '../../config';

import { SectionBackground } from '../../components/SectionBackground';
import { ThemeSwitcherButton } from '../../components/ThemeSwitcherButton';
import { MessageComponent } from '../../components/MessageComponent';

export const LoginPage = ({
  themeSwitcher,
  setShowLandingPage,
  setMessage,
  user,
  setUser,
}) => {
  const [loginControl, setLoginControl] = useState(false);

  const handleOtherAction = () => {
    setLoginControl((control) => !control);
  };

  const handleGetInfo = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    fetch(`${config.linkApi}/${loginControl ? 'register' : 'login'}-api`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          setMessage(`${data.code}: ${data.message}`);
          setTimeout(() => {
            setMessage(undefined);
          }, 3000);
        } else {
          setShowLandingPage(true);
          setMessage(`${data.code}: ${data.message}`);
          setTimeout(() => {
            setMessage(undefined);
          }, 3000);
        }
      });
  };

  return (
    <Styled.Container>
      <Styled.Form>
        <Styled.TitleLogin>LP Generator</Styled.TitleLogin>
        <Styled.Label htmlfor="user">Usuário:</Styled.Label>
        <Styled.Input
          type="text"
          name="user"
          placeholder="Digite seu usuário"
          onChange={handleGetInfo}
        />
        <Styled.Label htmlfor="password">Senha:</Styled.Label>
        <Styled.Input
          type="password"
          name="password"
          placeholder="Digite sua senha"
          onChange={handleGetInfo}
        />
        <Styled.InputSubmit
          type="submit"
          value={loginControl ? 'Registrar' : 'Fazer Login'}
          onClick={handleLogin}
        />
        <Styled.Or>ou</Styled.Or>
        <Styled.OtherAction>
          <p>
            {loginControl ? 'Já possui uma conta?' : 'Não possui uma conta?'}
          </p>
          <button onClick={handleOtherAction}>
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
  setShowLandingPage: P.func,
  setMessage: P.func,
  user: P.object,
  setUser: P.func,
};
