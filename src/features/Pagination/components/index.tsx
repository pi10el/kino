'use client';

import { useSearchFilter } from '@/shared/lib/hooks/useSearchFilter';

// helpers
import { paginControl } from '../lib/paginControl';

// styles
import styles from './styles.module.scss';

// components
import { IconArrow } from '@/shared/components/icons/IconArrow';

interface Props {
  pages: number;
}

export const Pagination: React.FC<Props> = ({ pages }) => {
  const { params, setFilter } = useSearchFilter();

  const current = +params.page || 1;

  const maxPages = current + 50 > pages ? pages : current + 50;

  const setPage = (numberPage: number) => {
    setFilter({
      page: numberPage === 1 ? '' : numberPage.toString(),
    });
  };

  return (
    <div className={styles.pagination}>
      {pages > 0 && (
        <button disabled={current === 1} onClick={() => setPage(1)}>
          1
        </button>
      )}

      <button onClick={() => setPage(current - 1)} disabled={current === 1}>
        <IconArrow direction="left" />
      </button>
      {pages > 0
        ? paginControl(pages, current).map((el) => (
            <button
              key={el}
              className={`${styles.desktop} ${
                current === el ? styles.active : ''
              }`}
              onClick={() => setPage(el)}
            >
              {el}
            </button>
          ))
        : null}
      <button className={`${styles.mobile} ${styles.active}`}>{current}</button>

      <button
        disabled={current === pages || pages === 0}
        onClick={() => setPage(current + 1)}
      >
        <IconArrow direction="right" />
      </button>
      {pages > 0 ? (
        <button disabled={current === pages} onClick={() => setPage(maxPages)}>
          {maxPages}
        </button>
      ) : null}
    </div>
  );
};
