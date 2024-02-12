export const parseType = (type: TypeMovie) => {
  switch (type) {
    case 'movie':
      return 'фильм';

    case 'anime':
      return 'аниме';

    case 'animated-series':
      return 'мульт-сериал';

    case 'cartoon':
      return 'мультфильм';

    case 'tv-series':
      return 'сериал';

    case 'tv-show':
      return 'тв-шоу';

    default:
      return type;
  }
};
