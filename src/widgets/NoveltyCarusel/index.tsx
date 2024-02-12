'use client';

// components
import { NoveltySlide } from '@/entities/NoveltySlide';
import { Carusel } from '@/features/Carusel';

// styles
import styles from './styles.module.scss';

interface Props {
  movies: TPremiereMovieProps[];
}

export const NoveltyCarusel = ({ movies }: Props) => (
  <Carusel
    className={styles.slider}
    title="Новинки"
    itemsLength={movies.length}
    onRenderSlide={(slide) => <NoveltySlide slide={movies[slide]} />}
  />
);
