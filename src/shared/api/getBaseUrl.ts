interface IBaseUrl {
  endpoint: TEndpoints;
  version: string;
  parameters: TParameters;
}

export const baseUrl = 'https://api.kinopoisk.dev/';

export const getBaseUrl = ({ endpoint, version, parameters }: IBaseUrl) => {
  const query = `${baseUrl}v${version}/`;

  if (typeof parameters === 'object') {
    return `${query}${endpoint}?${encodeURI(
      Object.keys(parameters)
        .filter(
          (key) => parameters[key as keyof ParametersRequest] !== undefined,
        )
        .map((key) => {
          const item = key as keyof ParametersRequest;

          if (typeof parameters[item] === 'object') {
            return (parameters[item] as string[])
              .map((el) => `${key}=${el}`)
              .join('&');
          } else if (parameters[item]) {
            return `${key}=${parameters[item]}`;
          }
        })
        .join('&'),
    )}`;
  } else if (endpoint === 'search') {
    return `${query}/movie/search?page=1&limit=10&query=${parameters}`;
  } else {
    return `${query}${endpoint}/${parameters}`;
  }
};
