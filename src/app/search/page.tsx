import { Suspense } from 'react';

// services
import { searchServices } from '@/shared/services/search';

// components
import { Container } from '@/shared/components/Container';
import { SearchMoviesList } from '@/widgets/SearchMoviesList';
import { SearchFilters } from '@/widgets/SearchFilters';

interface Props {
  params: { [key: string]: string };
  searchParams: IPropsSearchMovies;
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const Search = ({ searchParams }: Props) => {
  const data = searchServices.getSearchMovies({ ...searchParams });

  return (
    <Container tag="div" variant="container-line">
      <SearchFilters />
      <Container tag="section" variant="movies">
        <Suspense fallback={<section className="loader search_movies" />}>
          {/* @ts-expect-error Server Component */}
          <SearchMoviesList promise={data} />
        </Suspense>
      </Container>
    </Container>
  );
};

export default Search;
