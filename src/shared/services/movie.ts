import { kinopoiskDevFetch } from '@/shared/api/kinopoiskDevFetch';

const youTubeRegex =
  /\https:\/\/www.(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))/;

const blur =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAMUlEQVR4nGMQlVZkYOPlFBATk1VhEJNVefntX333FB5hCQZRacV3f/9vP3oOyoErAwBFnwyaF1AkJwAAAABJRU5ErkJggg==';

export const movieServices = {
  getMovie: async (id: number) => {
    const movie: IMovieGet = await kinopoiskDevFetch({
      endpoint: 'movie',
      version: '1.3',
      parameters: id,
    });

    const poster = { src: movie.poster?.url || '', blur };

    const trailers = movie.videos?.trailers
      .filter((el) => el.site === 'youtube')
      .map((el) => {
        const id = el.url.replace(youTubeRegex, '');

        return {
          ...el,
          url: `https://www.youtube-nocookie.com/embed/${id}?authuser=0&origin=https://capable-parfait-169a44.netlify.app/`,
        };
      })
      .reduce(
        (acc, curr) => {
          if (!acc.find((el) => el.name === curr.name)) acc.push(curr);
          return acc;
        },
        [] as {
          url: string;
          name: string;
          site: string;
          type: string;
        }[],
      );

    const persons = movie.persons?.map((el) => ({
      ...el,
      photo: { blur, src: el.photo || '' },
    }));

    const similarMovies = movie.similarMovies?.map((el) => ({
      ...el,
      poster: { blur, src: el.poster?.previewUrl || '' },
    }));

    const sequelsAndPrequels = movie.sequelsAndPrequels?.map((el) => ({
      ...el,
      poster: { blur, src: el.poster?.previewUrl || '' },
    }));

    return {
      ...movie,
      poster,
      persons,
      similarMovies,
      sequelsAndPrequels,
      videos: { ...movie.videos, trailers },
    };
  },
};
