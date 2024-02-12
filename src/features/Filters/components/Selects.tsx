'use client';

// redux
import { useSearchFilter } from '@/shared/lib/hooks/useSearchFilter';

// consts
import { COUNTRIES } from '@/shared/consts/COUNTRIES';
import { GENRES } from '@/shared/consts/GENRES';
import { TYPES } from '@/shared/consts/TYPES';

// components
import { Container } from '@/shared/components/Container';
import Select from '@/shared/components/Select';

export const Selects: React.FC = () => {
  const { params, setFilter } = useSearchFilter();

  const parseArrQuery = (field: string) => {
    return field && field.length ? field.split(',') : [];
  };

  const selectFilter = (key: string, field: string, el: string) => {
    const array: string[] = parseArrQuery(field);
    array.push(el);

    setFilter({ page: '', [key]: array.join(',') });
  };

  const parsePlaceholder = (data: string) => {
    return data
      .split(',')
      .map((el) => el.charAt(0).toLocaleUpperCase() + el.slice(1))
      .join(', ');
  };

  return (
    <Container tag="div" variant="line">
      <Select
        placeholder={params.type ? TYPES[+params.type] : TYPES[0]}
        items={TYPES}
        arrayQuery={params.type ? [params.type] : [TYPES[0]]}
        onSelect={(_, index) => {
          if (!index) setFilter({ page: '', type: '' });
          else setFilter({ page: '', type: index.toString() });
        }}
      />
      <Select
        placeholder={
          params.genres ? parsePlaceholder(params.genres) : GENRES[0]
        }
        items={GENRES}
        arrayQuery={params.genres ? parseArrQuery(params.genres) : [GENRES[0]]}
        onSelect={(item, index) => {
          if (!index) setFilter({ page: '', genres: '' });
          else selectFilter('genres', params.genres, item);
        }}
      />
      <Select
        input
        placeholder={params.country ? params.country : COUNTRIES[0]}
        items={COUNTRIES}
        arrayQuery={
          params.country ? parseArrQuery(params.country) : [COUNTRIES[0]]
        }
        onSelect={(item, index) => {
          if (!index) setFilter({ page: '', country: '' });
          else selectFilter('country', params.country, item);
        }}
      />
    </Container>
  );
};
