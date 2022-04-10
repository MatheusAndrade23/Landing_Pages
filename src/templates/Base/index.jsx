import P from 'prop-types';
import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { ThemeSwitcherButton } from '../../components/ThemeSwitcherButton';

export const Base = ({
  links,
  logoData,
  footerHtml,
  children,
  themeSwitcher,
}) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Styled.Container>
      <GoTop />
      <ThemeSwitcherButton themeSwitcher={themeSwitcher} />
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHtml: P.string.isRequired,
  themeSwitcher: P.func.isRequired,
};
