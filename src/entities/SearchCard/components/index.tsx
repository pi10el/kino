import empty from '../../../shared/assets/image/empty.svg';

// helpers
import { ageColor } from '@/shared/lib/helpers/ageColor';

//const
import { TYPES } from '@/shared/consts/TYPES';

// hooks

// components
import { CustomLink } from '@/features/CustomLink';
import { CustomImage } from '@/shared/components/CustomImage';
import { Rating } from '@/entities/Rating';

// styles
import styles from './styles.module.scss';

interface Props {
  item: TSearchProps;
  path: string;
}

export const SearchCard = ({ item, path }: Props) => {
  const parseDirectorsAndCountries = () => {
    const directors = item.persons
      ? item.persons
          .filter((el) => el.profession === 'режиссеры' && el.name)
          .map((el) => el.name)
      : ['неизвестно'];

    const countries = item.countries
      ? item.countries.map((el) => el.name)
      : ['неизвестно'];

    const dot = directors.length && countries.length ? ' • ' : '';

    return `${countries.join(', ')}${dot}${directors.join(', ')}`;
  };

  const parseGenresAndLengthMovie = () => {
    const genres = item.genres.map((el) => el.name).join(', ');

    const hour = Math.trunc(item.movieLength / 60);
    const isHour = hour ? `${hour} ч. ` : '';

    const minute = item.movieLength % 60;
    const isMinute = minute ? `${minute} мин.` : '';

    const dot = genres && (isHour || isMinute) ? ' • ' : '';

    return `${isHour}${isMinute}${dot}${genres}`;
  };

  const parseAlternativeName = () => {
    const name = item.alternativeName || '';
    const year = item.year || '';

    const dot = name && year ? ', ' : '';
    return `${name}${dot}${year}`;
  };

  const typeParse = () => {
    if (item.typeNumber === 4 || item.typeNumber === 6) {
      return TYPES[item.typeNumber];
    } else {
      return TYPES[item.typeNumber].slice(0, -1);
    }
  };
  const name = item.name || item.alternativeName || 'Неизвестно';

  if (!item.id) return null;

  return (
    <CustomLink draggable={false} href={path} className={styles.content}>
      <span className={styles.type}>{typeParse()}</span>
      <CustomImage
        className={styles.img}
        src={item.poster.src || empty}
        blurDataURL={item.poster.blur}
        alt={name}
      />
      <div className={styles.info}>
        <div>
          <div className={styles.title}>
            <h1>{name}</h1>
          </div>
          <div className={styles.subtitle}>
            <h2>{parseAlternativeName()}</h2>
            {item.ageRating !== null && (
              <span style={ageColor(item.ageRating)}>{item.ageRating}+</span>
            )}
          </div>
        </div>
        <div>
          <p>{parseGenresAndLengthMovie()}</p>
          <p>{parseDirectorsAndCountries()}</p>
        </div>
        <Rating classRating={styles.rating} rating={item.rating} />
      </div>
    </CustomLink>
  );
};
