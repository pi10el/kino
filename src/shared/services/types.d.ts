interface IPropsSearchMovies {
  page: number;
  year: string;
  age: string;
  popular: string;
  type: string;
  country: string;
  genres: string;
  sort: string;
}

interface IResponseMovies<T> {
  docs: Array<T> | [];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

interface IDefaultSlider {
  id: number;
  name: string;
  poster: IPoster;
  rating: IRating;
}

interface IPremiereMovie {
  id: number;
  name: string;
  description: string;
  premiere: { world: string };
  poster: IPoster;
  backdrop: IPoster;
}

interface ISearchMovie {
  id: number;
  name: string;
  rating: IRating;
  ageRating: string | null;
  alternativeName: string | null;
  countries: Array<{ name: string }>;
  genres: Array<IGenre>;
  movieLength: number;
  persons: Array<{
    name: string | null;
    profession: string | null;
  }>;
  poster: IPoster;
  typeNumber: number;
  year: number;
}

interface INavbarSearchMovie {
  id: number;
  name: string;
  alternativeName: string;
  enName: string;
  names: string[];
  type: TypeMovie;
  year: number | null;
  description: string | null;
  shortDescription: string | null;
  logo: string | null;
  poster: string | null;
  backdrop: {
    url: string | null;
    previewUrl: string | null;
  };
  rating: number;
  votes: number;
  movieLength: number;
  genres: Array<IGenre>;
  countries: Array<string>;
  releaseYears: Arrat<number> | [];
}

type MapPoster<T> = Omit<T, 'poster'> & { poster: IPlaiceholder };
type MapPremier<T> = Omit<T, 'poster' | 'backdrop'> & {
  poster: IPlaiceholder;
  backdrop: IPlaiceholder;
};

type TSearchProps = MapPoster<ISearchMovie>;
type TPremiereMovieProps = MapPremier<IPremiereMovie>;
type TDefaultSliderProps = MapPoster<IDefaultSlider>;
type TNavbarSearchMovie = MapPoster<INavbarSearchMovie>;
