import empty from '../../../shared/assets/image/empty.svg';

// helpers
import { parseType } from '@/shared/lib/helpers/parseType';

// components
import { CustomLink } from '@/features/CustomLink';
import { CustomImage } from '@/shared/components/CustomImage';

// styles
import styles from './styles.module.scss';
import { NumberRating } from '@/entities/Rating';

interface Props {
  name?: string;
  poster?: IPlaiceholder;
  path?: string;
  rating?: IRating;
  type?: TypeMovie;
  plug?: boolean;
}

export const MovieCard = ({ name, poster, rating, path, type }: Props) => {
  if (!name || !path || !poster) return <div className={styles.empty} />;

  return (
    <CustomLink
      tabIndex={-1}
      draggable={false}
      className={styles.item}
      href={path}
    >
      <CustomImage
        src={poster.src || empty}
        blurDataURL={poster.blur}
        alt={name}
      />

      {rating && (
        <NumberRating
          background
          className={styles.rating}
          rating={[rating?.kp, rating?.imdb]}
        />
      )}

      {type && <span className={styles.type}>{parseType(type)}</span>}

      <span className={styles.name}>{name}</span>
    </CustomLink>
  );
};
