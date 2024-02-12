import { getBaseUrl } from './getBaseUrl';

interface IKinopoiskDevFetch {
  endpoint: TEndpoints;
  version: string;
  parameters: TParameters;
}

export const kinopoiskDevFetch = async <returnType>(
  props: IKinopoiskDevFetch
): Promise<returnType> => {
  const init = {
    method: 'GET',
    headers: {
      'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY || '',
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(getBaseUrl(props), init);

  if (!response.ok) throw new Error('Error!');

  const data = await response.json();

  return data;
};
