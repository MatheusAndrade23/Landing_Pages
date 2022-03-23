import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data even id there are no data', () => {
    const pagesData = mapData()[0];
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.title).toBe('');
  });

  it('should map data there are data', () => {
    const pagesData = mapData([
      {
        footer_text: '<p>Hey</p>',
        slug: 'slug',
        title: 'title',
      },
    ])[0];
    expect(pagesData.footerHtml).toBe('<p>Hey</p>');
    expect(pagesData.slug).toBe('slug');
    expect(pagesData.title).toBe('title');
  });
});
