interface ISimilarMovie {
  id: number;
  name: string | null;
  enName: string | null;
  alternativeName: string | null;
  type: TypeMovie;
  poster: IPoster;
}

interface IWatchability {
  name: string;
  logo: { url: string };
  url: string;
}

interface IMovieGet {
  status: string | null;
  externalId: { kpHD: null | string; imdb: string | null; tmdb: number | null };
  rating: IRating;
  votes: IRating;
  backdrop: { url: string | null; previewUrl: string | null };
  movieLength: number;
  productionCompanies: Array<{
    name: string | null;
    url: string | null;
    previewUrl: string | null;
  }>;
  spokenLanguages: [{ name: 'English'; nameEn: 'English' }];
  images: { postersCount: number; backdropsCount: number; framesCount: number };
  id: number;
  type: TypeMovie;
  name: string | null;
  description: string | null;
  distributors: { distributor: string | null; distributorRelease: null };
  premiere: IPremere;
  slogan: string | null;
  year: number | null;
  facts: IFact[];
  genres: [{ name: 'приключения' }, { name: 'боевик' }];
  countries: [{ name: 'Испания' }, { name: 'США' }];
  seasonsInfo: [];
  lists: any;
  typeNumber: number;
  alternativeName: string | null;
  enName: string | null;
  names: Array<{ name: string }>;
  ratingMpaa: string | null;
  shortDescription: string | null;
  technology: { hasImax: boolean; has3D: boolean };
  ticketsOnSale: boolean;
  updatedAt: string | null;
  budget: { value: number; currency: string };
  fees: {
    world: { value: number; currency: string };
    russia: { value: number; currency: string };
    usa: { value: number; currency: string };
  };
  imagesInfo: { framesCount: number };
  ageRating: number | null;
  logo: { url: string | null };
  watchability: { items: IWatchability[] };
  top10: number | null;
  top250: number | null;
  poster: IPoster;
  persons: IPerson[];
  videos: {
    trailers: ITrailerMovie[];
    teasers: any;
  };
  similarMovies: ISimilarMovie[];
  sequelsAndPrequels: ISimilarMovie[];
}

interface IPersonMovie extends IPerson {
  photo: IPlaiceholder;
}

interface ISimilarProps extends ISimilarMovie {
  poster: IPlaiceholder;
}

interface IMovieInfo
  extends Omit<
    IMovieGet,
    | 'poster'
    | 'videos'
    | 'similarMovies'
    | 'sequelsAndPrequels'
    | 'watchability'
  > {
  poster: IPlaiceholder;
  persons: IPersonMovie[];
}
