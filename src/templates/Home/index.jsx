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

import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { LoginPage } from '../LoginPage';

import dataFake from '../../api/data.json';
import { GlobalStyles } from '../../styles/global-styles';

function Home() {
  const LINK_API = `${config.url}`;

  const location = useLocation();

  const [theme, setTheme] = useState({ ...DefaultTheme });
  const [themeControl, setThemeControl] = useState(false);
  const [data, setData] = useState([]);

  const ThemeSwitcher = () => {
    setThemeControl((control) => !control);

    if (!themeControl) {
      setTheme({ ...DarkTheme });
    } else {
      setTheme({ ...DefaultTheme });
    }
  };

  useEffect(() => {
    const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathName ? pathName : config.defaultSlug;

    const loadData = async () => {
      // try {
      //   const data = await fetch(LINK_API + slug);
      //   const json = await data.json();
      //   const pageData = mapData(json);
      //   setData(pageData[0]);
      // } catch (e) {
      //   setData(undefined);
      // }

      const pageData = mapData(dataFake);
      setData(...pageData);
    };

    loadData();
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`;
    }

    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return (
      <ThemeProvider theme={theme}>
        <PageNotFound />
      </ThemeProvider>
    );
  }

  if (data && !data.slug) {
    return (
      <ThemeProvider theme={theme}>
        <Loading />
      </ThemeProvider>
    );
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <ThemeProvider theme={theme}>
      {
        /* <Base
        links={links}
        footerHtml={footerHtml}
        logoData={{ text, link, srcImg }}
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
      </Base> */
        <LoginPage themeSwitcher={ThemeSwitcher} />
      }
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default Home;
