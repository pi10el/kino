'use client';

import { useEffect, useRef, useState } from 'react';

// styles
import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
}

export const Detail = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isMore, setMore] = useState(false);
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    setHeight(ref.current!.clientHeight);
  }, []);

  return (
    <div
      className={styles.more}
      style={height ? { height: !isMore ? 591 : height + 30 } : { height: 591 }}
    >
      <div ref={ref}>{children}</div>
      {height && height > 591 && (
        <button
          onClick={() => setMore(!isMore)}
          className={isMore ? styles.open : undefined}
        >
          {isMore ? 'Свернуть' : 'Подробнее'}
        </button>
      )}
    </div>
  );
};
