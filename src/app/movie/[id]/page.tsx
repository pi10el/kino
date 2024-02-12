// services
import { movieServices } from '@/shared/services/movie';

// components
import { MovieHead } from '@/widgets/MovieHead';
import { PersonsSlider } from '@/widgets/PersonsSlider';
import { SimilarSlider } from '@/widgets/SimilarSlider';
import { Player } from '@/widgets/Player';
import { Facts } from '@/widgets/Facts';
import { Container } from '@/shared/components/Container';

export const revalidate = 0;

interface Props {
  params: {
    id: number;
  };
}

const Movie = async ({ params }: Props) => {
  const { videos, sequelsAndPrequels, similarMovies, watchability, ...info } =
    await movieServices.getMovie(params.id);

  const movies = () => {
    if (!similarMovies) return sequelsAndPrequels;
    if (!sequelsAndPrequels) return similarMovies;

    return [...sequelsAndPrequels, ...similarMovies];
  };

  return (
    <Container tag="div" variant="container-column">
      <MovieHead info={info} />
      <PersonsSlider persons={info.persons} />
      <Facts facts={info.facts} />
      <Player id={info.id} trailers={videos.trailers} />
      <SimilarSlider title="Похожие фильмы" movies={movies()} />
    </Container>
  );
};

export default Movie;
