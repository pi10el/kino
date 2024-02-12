'use client';

// api
import { useSearchMoviesQuery } from '../../api/searchNavbarApi';

// components
import { Item } from '../Item';
import Loader from '@/shared/components/Loader';

// styles
import styles from './styles.module.scss';

interface Props {
  value: string;
}

export const Dropdown = ({ value }: Props) => {
  const { data, isFetching } = useSearchMoviesQuery(value);
  if (isFetching || !data || !value)
    return (
      <div className={styles.dropdown}>
        <Loader height={60} />
      </div>
    );
  if (!data.length) {
    return (
      <div className={styles.dropdown}>
        <span
          style={{
            display: 'block',
            padding: '20px 0',
            textAlign: 'center',
          }}
        >
          Результатов не найдено
        </span>
      </div>
    );
  }

  return (
    <div className={styles.dropdown}>
      {data.map((item) => (
        <Item
          id={item.id}
          key={item.id}
          name={item.name || item.alternativeName || item.enName || ''}
          enName={item.alternativeName || ''}
          poster={item.poster}
          rating={item.rating}
          year={item.year}
        />
      ))}
    </div>
  );
};
