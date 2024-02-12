import empty from '../../../shared/assets/image/empty.svg';

// components
import { CustomImage } from '@/shared/components/CustomImage';

// styles
import styles from './styles.module.scss';

interface Props {
  person?: IPersonMovie;
}

export const PersonCard = ({ person }: Props) => {
  if (!person) return <div className={styles.empty} />;

  const name = person.name || person.enName || 'неизвестно';

  return (
    <div className={styles.person}>
      <p className={styles.profession}>{person.profession?.slice(0, -1)}</p>

      <CustomImage
        src={person.photo.src || empty}
        blurDataURL={person.photo.blur}
        alt={name}
      />

      <p className={styles.name}>{name}</p>
    </div>
  );
};
