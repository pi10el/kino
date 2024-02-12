import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './getBaseUrl';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    headers: {},
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', `${process.env.NEXT_PUBLIC_API_KEY}` || '');

      return headers;
    },
  }),
  endpoints: () => ({}),
});
