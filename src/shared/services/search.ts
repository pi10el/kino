import { kinopoiskDevFetch } from '@/shared/api/kinopoiskDevFetch';

const blur =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAMUlEQVR4nGMQlVZkYOPlFBATk1VhEJNVefntX333FB5hCQZRacV3f/9vP3oOyoErAwBFnwyaF1AkJwAAAABJRU5ErkJggg==';

interface ISortParseReturn {
  field: undefined | string[];
  dir: 1 | -1 | undefined;
}

export const searchServices = {
  getSearchMovies: async (props: IPropsSearchMovies) => {
    const parseSort = () => {
      if (!props.sort) return undefined;

      const sort = props.sort?.split('(') || [];

      const result = (field?: string[]): ISortParseReturn => ({
        field,
        dir: sort[1] === 'возрастание)' ? 1 : -1,
      });

      switch (sort[0]) {
        case 'По годам':
          return result(['year']);
        case 'По рейтингу КП':
          return result(['rating.kp']);
        case 'По рейтингу IMDB':
          return result(['rating.imdb']);
        case 'По рейтингу Критиков':
          return result(['rating.filmCritics']);
        default:
          return result();
      }
    };

    const defaultParam: ParametersRequest = {
      selectFields: [
        'id',
        'name',
        'alternativeName',
        'persons.name',
        'persons.profession',
        'poster.previewUrl',
        'typeNumber',
        'year',
        'rating',
        'genres.name',
        'movieLength',
        'countries.name',
        'ageRating',
      ],
      'rating.await': props.popular,
      limit: 15,
    };

    const controlParam: ParametersRequest = {
      sortField: parseSort()?.field || undefined,
      sortType: parseSort()?.dir || undefined,
      typeNumber: props.type,
      'genres.name': props.genres?.split(','),
      'countries.name': props.country?.split(','),
      page: props.page,
      ageRating: props.age,
      year: props.year,
    };

    const response = await kinopoiskDevFetch<IResponseMovies<ISearchMovie>>({
      endpoint: 'movie',
      version: '1.3',
      parameters: { ...defaultParam, ...controlParam },
    });

    const docs = response.docs.map((el) => ({
      ...el,
      poster: { src: el.poster?.previewUrl || '', blur },
    }));

    return { ...response, docs };
  },
};
