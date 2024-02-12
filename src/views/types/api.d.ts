type TypeMovie =
  | 'movie'
  | 'tv-series'
  | 'cartoon'
  | 'anime'
  | 'animated-series'
  | 'tv-show';

type GanresSlug =
  | 'anime'
  | 'biografiya'
  | 'boevik'
  | 'vestern'
  | 'voennyy'
  | 'detektiv'
  | 'detskiy'
  | 'dlya-vzroslyh'
  | 'dokumentalnyy'
  | 'drama'
  | 'igra'
  | 'istoriya'
  | 'komediya'
  | 'koncert'
  | 'korotkometrazhka'
  | 'kriminal'
  | 'melodrama'
  | 'muzyka'
  | 'multfilm'
  | 'myuzikl'
  | 'novosti'
  | 'priklyucheniya'
  | 'realnoe-TV'
  | 'semeynyy'
  | 'sport'
  | 'tok-shou'
  | 'triller'
  | 'uzhasy'
  | 'fantastika'
  | 'film-nuar'
  | 'fentezi'
  | 'ceremoniya';

type GanresName =
  | 'аниме'
  | 'биография'
  | 'боевик'
  | 'вестерн'
  | 'военный'
  | 'детектив'
  | 'детский'
  | 'для взрослых'
  | 'документальный'
  | 'драма'
  | 'игра'
  | 'история'
  | 'комедия'
  | 'концерт'
  | 'короткометражка'
  | 'криминал'
  | 'мелодрама'
  | 'музыка'
  | 'мультфильм'
  | 'мюзикл'
  | 'новости'
  | 'приключения'
  | 'реальное ТВ'
  | 'семейный'
  | 'спорт'
  | 'ток-шоу'
  | 'триллер'
  | 'ужасы'
  | 'фантастика'
  | 'фильм-нуар'
  | 'фэнтези'
  | 'церемония';

type StatusMovie =
  | 'filming'
  | 'pre-production'
  | 'completed'
  | 'announced'
  | 'post-production';

interface IGenre {
  name: GanresName;
  slug: GanresSlug;
}

interface IType {
  name: TypeMovie;
  slug: TypeMovie;
}

interface IRating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

interface IExternalId {
  kpHD: string | null;
  imdb: string | null;
  tmdb?: number | null;
}

interface IVotes {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

interface IPoster {
  url: string | null;
  previewUrl: string | null;
}

interface IPlaiceholder {
  blur: string;
  src: string | '';
}

interface INetwork extends IPoster {
  name: string;
}

interface ILogo {
  url: string | null;
}

interface IWatchabilityItem {
  name: string | null;
  logo?: ILogo;
  url?: string | null;
}

interface IReleaseYears {
  start: number;
  end: number;
}

interface IAmount {
  value: number;
  currency: string;
}

interface IVideoItem {
  url: string | null;
  name: string;
  site: 'youtube | yandex';
  type: string;
  size: number;
}

interface IPerson {
  id: number;
  photo: string | null;
  name: string;
  enName: string;
  description?: string | null;
  profession: string | null;
  enProfession: string | null;
}

interface IMovieItem {
  id: number;
  name: string;
  enName: string | null;
  alternativeName: string;
  type: TypeMovie;
  poster: IPoster;
}

interface IFact {
  value: string;
  type: 'FACT' | 'BLOOPER';
  spoiler: boolean;
}

interface IPremere {
  country: string | null;
  world: string | null;
  russia: string | null;
  cinema: string | null;
}

interface ITrailerMovie {
  url: string;
  name: string;
  site: string;
  type: string;
}

interface ParametersRequest {
  selectFields?: Array<string>;
  sortField?: Array<string>;
  sortType?: 1 | -1 | undefined;
  page?: number;
  limit?: number;
  id?: number;
  'externalId.kpHD'?: string;
  'externalId.imdb'?: string;
  'externalId.tmdb'?: string;
  name?: string;
  alternativeName?: string;
  // names.name
  type?: Array<TypeMovie>;
  typeNumber?: string;
  year?: number | string;
  description?: string;
  shortDescription?: string;
  slogan?: string;
  status?: StatusMovie;
  'rating.kp'?: number | string;
  'rating.imdb'?: number | string;
  'rating.tmdb'?: number | string;
  'rating.filmCritics'?: number | string;
  'rating.russianFilmCritics'?: number | string;
  'rating.await'?: number | string;
  'votes.kp'?: number | string;
  'votes.imdb'?: number | string;
  'votes.tmdb'?: number | string;
  'votes.filmCritics'?: number | string;
  'votes.await'?: number | string;
  movieLength?: number | '!null';
  ratingMpaa?: string;
  ageRating?: string;
  'logo.url'?: string;
  'poster.url'?: string;
  'poster.previewUrl'?: string;
  'backdrop.url'?: string;
  'backdrop.previewUrl'?: string;
  'videos.trailers.url'?: string;
  'videos.trailers.name'?: string;
  'videos.trailers.site'?: string;
  'videos.trailers.type'?: string;
  'genres.name'?: Array<string>;
  'countries.name'?: Array<string> | '!null';
  'persons.id'?: string;
  'persons.photo'?: string;
  'persons.name'?: string;
  'persons.enName'?: string;
  'reviewInfo.count'?: number;
  'reviewInfo.positiveCount'?: number;
  'reviewInfo.percentage'?: string;
  'seasonsInfo.number'?: string;
  'seasonsInfo.episodesCount'?: string;
  'budget.value'?: number;
  'budget.currency'?: string;
  'fees.world.value'?: number;
  'fees.world.currency'?: string;
  'fees.russia.value'?: number;
  'fees.russia.currency'?: string;
  'fees.usa.value'?: number;
  'fees.usa.currency'?: string;
  'premiere.country'?: string;
  'premiere.world'?: string;
  'premiere.russia'?: string;
  'premiere.digital'?: string;
  'premiere.cinema'?: string;
  'similarMovies.id'?: number;
  'sequelsAndPrequels.id'?: number;
  'watchability.items.name'?: string;
  'releaseYears.start'?: string;
  'releaseYears.end'?: string;
  top10?: number | '!null';
  top250?: number | '!null';
}

type TEndpoints = 'movie' | 'season' | 'review' | 'person' | 'image' | 'search';
type TParameters = ParametersRequest | number | string;
