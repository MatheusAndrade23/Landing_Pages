import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { DefaultTheme } from '../../styles/DefaultTheme';
import { DarkTheme } from '../../styles/DarkTheme';

import config from '../../config';
import { mapData } from '../../api/map-data';

import { Heading } from '../../components/Heading';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import { MessageComponent } from '../../components/MessageComponent';

import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { LoginPage } from '../LoginPage';

import { GlobalStyles } from '../../styles/global-styles';

function Home() {
  const location = useLocation();

  const [theme, setTheme] = useState({ ...DefaultTheme });
  const [themeControl, setThemeControl] = useState(false);
  const [page, setPage] = useState([]);

  const [loadingControl, setLoadingControl] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(false);
  const [message, setMessage] = useState(undefined);
  const [user, setUser] = useState({});

  const ThemeSwitcher = () => {
    setThemeControl((control) => !control);

    if (!themeControl) {
      setTheme({ ...DarkTheme });
    } else {
      setTheme({ ...DefaultTheme });
    }
  };

  useEffect(() => {
    if (showLandingPage) {
      setLoadingControl(true);
      fetch(`${config.linkApi}/landing-pages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            setLoadingControl(false);
            setMessage(`${data.code}: ${data.message}`);
            setTimeout(() => {
              setMessage(undefined);
            }, 3000);
          } else {
            setLoadingControl(false);
            const pageData = mapData(data.page);
            setPage(...pageData);
            setMessage(`${data.code}: ${data.message}`);
            setTimeout(() => {
              setMessage(undefined);
            }, 3000);
          }
        });
    }
  }, [user, showLandingPage]);

  useEffect(() => {
    if (page === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (page && !page.slug) {
      document.title = `Login | ${config.siteName}`;
    }

    if (page && page.title) {
      document.title = `${page.title} | ${config.siteName}`;
    }
  }, [page]);

  if (page === undefined) {
    return (
      <ThemeProvider theme={theme}>
        <PageNotFound />
      </ThemeProvider>
    );
  }

  const { menu = {}, sections = [], footerHtml = '', slug = '' } = page;
  const { links = [], text = '', link = '', srcImg = '' } = menu;

  return (
    <ThemeProvider theme={theme}>
      <>
        {loadingControl && <Loading />}
        {message && <MessageComponent text={message} />}
        {showLandingPage ? (
          <Base
            links={links}
            footerHtml={footerHtml}
            logoData={{
              text,
              link,
              srcImg,
            }}
            themeSwitcher={ThemeSwitcher}
          >
            {sections.map((section, index) => {
              const { component } = section;
              const key = `${slug}-${index}`;

              if (component === 'section.section-two-columns') {
                return <GridTwoColumns key={key} {...section} />;
              }

              if (component === 'section.section-content') {
                return <GridContent key={key} {...section} />;
              }

              if (component === 'section.section-grid-text') {
                return <GridText key={key} {...section} />;
              }

              if (component === 'section.section-grid-image') {
                return <GridImage key={key} {...section} />;
              }
            })}
          </Base>
        ) : (
          <LoginPage
            themeSwitcher={ThemeSwitcher}
            setShowLandingPage={setShowLandingPage}
            setMessage={setMessage}
            user={user}
            setUser={setUser}
          />
        )}
      </>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default Home;
