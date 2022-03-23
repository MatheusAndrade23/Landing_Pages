import { mapMenu } from './map-menu';
import { mapMenuLinks } from './map-menu';

describe('map-meu', () => {
  it('should return a object even if its with no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.srcImg).toBe('');
    expect(menu.link).toBe('');
  });

  it('should map menu with right keys and values', () => {
    const menu = mapMenu({
      open_in_new_tab: false,
      logo_text: 'Landing Page',
      logo_link: '#home',
      menu: [
        {
          open_in_new_tab: false,
          link_text: 'grid-two',
          url: '#grid-two',
        },
        {
          open_in_new_tab: false,
          link_text: 'pricing',
          url: '#pricing',
        },
      ],
      logo: {
        url: 'a.svg',
      },
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing Page');
    expect(menu.srcImg).toBe('a.svg');
    expect(menu.link).toBe('#home');
    expect(menu.links[0].children).toBe('grid-two');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].link).toBe('#grid-two');
  });

  it('should return an empty array', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should map links if there are links', () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        link_text: 'grid-two',
        url: '#grid-two',
      },
      {},
    ]);
    expect(links[0].children).toBe('grid-two');
    expect(links[0].newTab).toBe(false);
    expect(links[0].link).toBe('#grid-two');
  });
});
