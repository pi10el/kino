import Link from 'next/link';
import Image from 'next/image';

// local img
import empty from '../../../../shared/assets/image/empty.svg';

// components
import { CustomImage } from '@/shared/components/CustomImage';

// styles
import styles from './styles.module.scss';
import { NumberRating } from '@/entities/Rating';

interface Props {
  id: number;
  name: string | null;
  poster: IPlaiceholder;
  enName: string;
  rating: number;
  year: number | null;
}

export const Item = ({ id, poster, name, rating, year, enName }: Props) => {
  const parseYearEnName = () => {
    return `${enName}${enName ? ', ' : ''}${year}`;
  };

  return (
    <Link href={`/movie/${id}`} className={styles.item}>
      <CustomImage
        src={poster.src || empty}
        blurDataURL={poster.blur}
        alt={name || enName || 'empty'}
      />
      <div className={styles.info}>
        <div>
          <p>{name}</p>
          <NumberRating rating={rating} />
        </div>

        <p>{parseYearEnName()}</p>
      </div>
    </Link>
  );
};
