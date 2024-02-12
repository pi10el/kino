'use client';

import { useSearchFilter } from '@/shared/lib/hooks/useSearchFilter';

// components
import { IconArrowSort } from '@/shared/components/icons/IconArrowSort';
import Select from '@/shared/components/Select';

// styles
import styles from './styles.module.scss';

const SORT = [
  'По умолчанию',
  'По годам',
  'По рейтингу КП',
  'По рейтингу IMDB',
  'По рейтингу Критиков',
];

export const Sorting = () => {
  const { params, setFilter } = useSearchFilter();

  const arrayParams = params.sort?.split('(');

  const setSort = (index: number) => {
    if (!index) setFilter({ page: '', sort: '' });
    else setFilter({ page: '', sort: SORT[index] + '(убывание)' });
  };

  return (
    <div className={styles.sort}>
      <span>Сортировать</span>
      <div className={styles.content}>
        <Select
          placeholder={arrayParams ? arrayParams[0] : 'По умолчанию'}
          items={SORT}
          arrayQuery={arrayParams ? [arrayParams[0]] : ['По умолчанию']}
          onSelect={(_, i) => setSort(i)}
        />
        <button
          type="button"
          className={
            arrayParams && arrayParams[1] === 'возрастание)' ? styles.up : ''
          }
          disabled={!arrayParams}
          onClick={() => {
            if (arrayParams[1] === 'возрастание)')
              setFilter({ page: '', sort: arrayParams[0] + '(убывание)' });
            else
              setFilter({ page: '', sort: arrayParams[0] + '(возрастание)' });
          }}
        >
          <IconArrowSort />
        </button>
      </div>
    </div>
  );
};
