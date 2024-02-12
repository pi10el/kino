import empty from '../../shared/assets/image/empty.svg';

// components
import { Rating } from '@/entities/Rating';
import { CustomImage } from '@/shared/components/CustomImage';
import { MovieInfo } from '@/entities/MovieInfo';

// styles
import styles from './styles.module.scss';

interface Props {
  info: IMovieInfo;
}

export const MovieHead = ({ info }: Props) => {
  return (
    <section className={styles.head}>
      <div className={styles.backdrop}>
        <CustomImage
          src={info.poster.src || empty}
          blurDataURL={info.poster.blur}
          alt="backdrop"
        />
      </div>
      <div className={styles.image}>
        <CustomImage
          src={info.poster.src || empty}
          alt={info.name || info.alternativeName || 'empty'}
          blurDataURL={info.poster.blur}
        />
        <Rating
          classRating={styles.image__rating}
          fullName
          rating={info.rating}
        />
      </div>

      <MovieInfo info={info} />
    </section>
  );
};
