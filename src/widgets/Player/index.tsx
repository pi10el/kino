'use client';

import { useState } from 'react';

// styles
import styles from './styles.module.scss';

// components
import Select from '@/shared/components/Select';

interface Props {
  id: number;
  trailers: {
    url: string;
    name: string;
    site: string;
    type: string;
  }[];
}

export const Player = ({ trailers }: Props) => {
  if (!trailers || !trailers.length)
    return (
      <section>
        <h1 style={{ fontSize: '20px' }}>Трейлер</h1>
        <div className={styles.trailer}>
          <span>Трейлеры не найдены</span>
        </div>
      </section>
    );

  const [placeholder, setPlaceholder] = useState(trailers[0].name);

  const names = trailers.map((el) => el.name);
  const select = trailers.find((el) => el.name === placeholder);

  return (
    <section>
      <div className={styles.title}>
        <h1>Трейлер</h1>
        {trailers.length > 1 ? (
          <Select
            placeholder={placeholder}
            items={names}
            onSelect={(el) => setPlaceholder(el)}
          />
        ) : null}
      </div>
      <iframe className={styles.trailer} allowFullScreen src={select?.url} />
    </section>
  );
};
