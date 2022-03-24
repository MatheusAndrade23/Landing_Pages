import {
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';

describe('map-section', () => {
  it('should render the default section without data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      _id: '602fdf2d540c00269e056178',
      title: 'January brings us Firefox 85',
      description: 'abc',
      metadata: {
        background: true,
        _id: '602fdf2d540c00269e05617b',
        name: 'contact',
        section_id: 'contact',
        __v: 0,
        id: '602fdf2d540c00269e05617b',
      },
      __v: 1,
      image: {
        _id: '602fdc2b540c00269e05616a',
        name: 'javascript.svg',
        alternativeText: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        caption: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        hash: 'javascript_b57bf48cda',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 30.31,
        url: 'a.svg',
        provider_metadata: {
          public_id: 'javascript_b57bf48cda',
          resource_type: 'image',
        },
        provider: 'cloudinary',
        width: 1030,
        height: 730,
        related: ['602fdf2d540c00269e056178', '602fdf2d540c00269e056172'],
        createdAt: '2021-02-19T15:41:31.808Z',
        updatedAt: '2021-02-19T15:54:22.590Z',
        __v: 0,
        id: '602fdc2b540c00269e05616a',
      },
      id: '602fdf2d540c00269e056178',
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('contact');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('January brings us Firefox 85');
  });

  it('should map the section content with no data', () => {
    const data = mapSectionContent();

    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.html).toBe('');
    expect(data.title).toBe('');
  });

  it('should map the section content with no data', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      _id: '602fdf2d540c00269e056173',
      title: 'news coverage and some surprises',
      content: '<p>html</p>',
      metadata: {
        background: false,
        _id: '602fdf2d540c00269e05617a',
        name: 'intro',
        section_id: 'intro',
        __v: 0,
        id: '602fdf2d540c00269e05617a',
      },
      __v: 1,
      id: '602fdf2d540c00269e056173',
    });

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.html).toBe('<p>html</p>');
    expect(data.title).toBe('news coverage and some surprises');
  });

  it('should map the grid text', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      _id: '602fdf2d540c00269e056174',
      description: 'abc',
      title: 'My Grid',
      text_grid: [
        {
          _id: '602fdf2d540c00269e05617c',
          title: 'Teste 1',
          description: 'abcdefg',
          __v: 0,
          id: '602fdf2d540c00269e05617c',
        },
        {
          _id: '602fdf2d540c00269e05617d',
          title: 'Teste 2',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
          __v: 0,
          id: '602fdf2d540c00269e05617d',
        },
        {
          _id: '602fdf2d540c00269e05617e',
          title: 'Teste 3',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
          __v: 0,
          id: '602fdf2d540c00269e05617e',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        _id: '602fdf2e540c00269e056199',
        name: 'grid-one',
        section_id: 'grid-one',
        __v: 0,
        id: '602fdf2e540c00269e056199',
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid');
    expect(data.sectionId).toBe('grid-one');
    expect(data.title).toBe('My Grid');
    expect(data.description).toBe('abc');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('abcdefg');
  });

  it('should map a empty grid text', () => {
    const data = mapTextGrid(undefined);

    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });
});
