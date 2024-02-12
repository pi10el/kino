// components
import { MovieCard } from '@/entities/MovieCard';
import { Slider } from '@/features/Slider';

interface Props {
  movies: ISimilarProps[];
  title: string;
}

export const SimilarSlider = ({ movies, title }: Props) => {
  return (
    <Slider
      height={250}
      title={title}
      titleMargin={15}
      marginTop={30}
      blank={{
        width: 170,
        lenght: [7, movies?.length],
        text: 'Похожие фильмы не найдены.',
      }}
    >
      {movies?.map((card) => (
        <MovieCard
          key={card.id}
          path={`/movie/${card.id}`}
          name={card.name || card.alternativeName || 'неизвестно'}
          poster={card.poster}
          type={card.type}
        />
      ))}
    </Slider>
  );
};
