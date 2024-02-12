// components
import { SearchMoviesLoader } from '@/entities/loaders/SearchMoviesLoader';
import { SearchCard } from '@/entities/SearchCard';
import { SearchEmptyResult } from '@/entities/SearchEmptyResult';
import { Pagination } from '@/features/Pagination';
import { SearchMoviesUpdate } from '@/features/SearchMoviesUpdate';
import { Container } from '@/shared/components/Container';

interface Props {
  promise: Promise<IResponseMovies<TSearchProps>>;
}

export const SearchMoviesList = async ({ promise }: Props) => {
  const data = await promise;

  return (
    <>
      <SearchMoviesUpdate loader={<SearchMoviesLoader />}>
        <Container tag="div" variant="movie">
          {data.docs.length ? (
            data.docs.map((el) => (
              <SearchCard
                key={`${el.id}_${el.name || el.alternativeName}`}
                item={el}
                path={`/movie/${el.id}`}
              />
            ))
          ) : (
            <SearchEmptyResult />
          )}
        </Container>
      </SearchMoviesUpdate>
      <Pagination pages={data.pages} />
    </>
  );
};
