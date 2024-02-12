import { kinopoiskDevFetch } from '@/shared/api/kinopoiskDevFetch';

const blur =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAMUlEQVR4nGMQlVZkYOPlFBATk1VhEJNVefntX333FB5hCQZRacV3f/9vP3oOyoErAwBFnwyaF1AkJwAAAABJRU5ErkJggg==';

export const mainServices = {
  getPremieres: async () => {
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    const arrMonth = month === 1 ? [12, 1] : [month - 1, month];
    const parse = arrMonth.map((el) => (el < 10 ? `0${el}` : `${el}`));

    const premiereDate = `01.${parse[0]}.${
      Number(parse[0]) === 12 ? year - 1 : year
    }-01.${parse[1]}.${year}`;

    const parameters: ParametersRequest = {
      selectFields: [
        'id',
        'name',
        'premiere.world',
        'poster.url',
        'description',
        'backdrop.url',
      ],
      type: ['movie'],
      'premiere.world': premiereDate,
      name: '!null',
      'poster.url': '!null',
    };

    type TResponsePremiere = IResponseMovies<IPremiereMovie>;

    const { docs } = await kinopoiskDevFetch<TResponsePremiere>({
      endpoint: 'movie',
      version: '1.3',
      parameters,
    });

    const result = docs.map((el) => ({
      ...el,
      poster: { src: el.poster.url || '', blur },
      backdrop: { src: el.backdrop.url || '', blur },
    }));

    return result;
  },

  getTopYear: async () => {
    const year = new Date().getFullYear();

    const parameters: ParametersRequest = {
      selectFields: ['id', 'name', 'rating', 'poster.previewUrl'],
      sortField: ['votes.imdb'],
      'genres.name': [
        '!документальный',
        '!история',
        '!спорт',
        '!музыка',
        '!биография',
        '!мюзикл',
        '!драма',
      ],
      page: 1,
      limit: 20,
      type: ['movie'],
      'premiere.world': `01.01.${year}-31.12.${year}`,
      'poster.previewUrl': '!null',
      name: '!null',
    };

    type TResponseDefault = IResponseMovies<IDefaultSlider>;

    const { docs } = await kinopoiskDevFetch<TResponseDefault>({
      endpoint: 'movie',
      version: '1.3',
      parameters,
    });

    const result = docs.map((el) => ({
      ...el,
      poster: { src: el.poster.previewUrl || '', blur },
    }));
    return result;
  },

  getMovies: async (
    type: TypeMovie,
    countries: string[] | 'all',
    minVotes: number = 0,
    year: 'all' | 'new' = 'all'
  ) => {
    const yearDate = new Date().getFullYear();

    const all = `01.01.${yearDate - 10}-31.12.${yearDate}`;
    const nov = `01.06.${yearDate - 1}-31.12.${yearDate}`;

    const range = (arr: [string, string]) => (year === 'all' ? arr[0] : arr[1]);

    const parameters: ParametersRequest = {
      selectFields: ['id', 'name', 'rating', 'poster.previewUrl'],
      sortField: year === 'all' ? ['votes.kp'] : ['premiere.world'],
      'genres.name': [
        '!документальный',
        '!история',
        '!спорт',
        '!музыка',
        '!биография',
        '!мюзикл',
      ],
      page: 1,
      limit: 20,
      type: [type],
      'countries.name': countries === 'all' ? undefined : countries,
      'rating.kp': range(['1-10', '5-10']),
      'rating.imdb': range(['1-10', '5-10']),
      'votes.kp': `${minVotes}-9999999`,
      'premiere.world': range([all, nov]),
      'poster.previewUrl': '!null',
      name: '!null',
    };

    type TResponseDefault = IResponseMovies<IDefaultSlider>;

    const { docs } = await kinopoiskDevFetch<TResponseDefault>({
      endpoint: 'movie',
      version: '1.3',
      parameters,
    });

    const result = docs.map((el) => ({
      ...el,
      poster: { src: el.poster.previewUrl || '', blur },
    }));

    return result;
  },

  getCartoonSlider: async () => {
    const yearDate = new Date().getFullYear();

    const parameters: ParametersRequest = {
      selectFields: ['id', 'name', 'rating', 'poster.previewUrl'],
      sortField: ['rating.imdb'],
      page: 1,
      limit: 20,
      type: ['cartoon'],
      'rating.kp': '5-10',
      'premiere.world': `01.01.${yearDate - 1}-31.12.${yearDate}`,
      'poster.previewUrl': '!null',
      name: '!null',
    };

    type TResponseDefault = IResponseMovies<IDefaultSlider>;

    const { docs } = await kinopoiskDevFetch<TResponseDefault>({
      endpoint: 'movie',
      version: '1.3',
      parameters,
    });

    const result = docs.map((el) => ({
      ...el,
      poster: { src: el.poster.previewUrl || '', blur },
    }));

    return result;
  },
};
