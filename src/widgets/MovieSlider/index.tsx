// components
import { MovieCard } from '@/entities/MovieCard';
import { Slider } from '@/features/Slider';

interface Props {
  title: string;
  promise: Promise<TDefaultSliderProps[]>;
}

export const MovieSlider = async ({ promise, title }: Props) => {
  const movies = await promise;

  return (
    <Slider height={250} title={title} titleMargin={15} marginTop={30}>
      {movies.map((el) => (
        <MovieCard
          key={el.id}
          path={`/movie/${el.id}`}
          name={el.name}
          poster={el.poster}
          rating={el.rating}
        />
      ))}
    </Slider>
  );
};
