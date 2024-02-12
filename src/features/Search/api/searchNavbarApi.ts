import { baseApi } from '@/shared/api/api';
import { baseUrl } from '@/shared/api/getBaseUrl';

const blur =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAMUlEQVR4nGMQlVZkYOPlFBATk1VhEJNVefntX333FB5hCQZRacV3f/9vP3oOyoErAwBFnwyaF1AkJwAAAABJRU5ErkJggg==';

const isDev = () => {};

const searchNavbarApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    searchMovies: build.query<TNavbarSearchMovie[], string>({
      query: (value: string) => ({
        url: `${baseUrl}v1.2/movie/search?page=1&limit=7&query=${value}`,
      }),
      transformResponse: (res: IResponseMovies<INavbarSearchMovie>) => {
        return res.docs.map((el) => ({
          ...el,
          poster: { src: el.poster || '', blur },
        }));
      },
    }),
  }),
});

export const { useSearchMoviesQuery } = searchNavbarApi;
