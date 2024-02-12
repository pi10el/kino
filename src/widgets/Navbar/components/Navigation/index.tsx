'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

// styles
import styles from './styles.module.scss';

// components
import { Overlay } from '@/shared/components/Overlay';
import { CustomLink } from '@/features/CustomLink';

const ROUTS_NAV = [
  { path: '/', name: 'Главная' },
  { path: `/search`, name: 'Поиск' },
];

interface Props {
  device: 'desktop' | 'mobile';
}

export const Navigation = ({ device }: Props) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.navigation} ${styles[device]}`}>
      <div className={styles.mobile}>
        <button
          className={`${styles.button} ${!isOpen ? '' : styles.open}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div />
        </button>
        <Overlay isVisible={isOpen} onClick={() => setIsOpen(false)} />
      </div>

      <nav
        className={`${styles[`${device}__nav`]} ${!isOpen ? styles.open : ''}`}
      >
        {ROUTS_NAV.map((el) => {
          return (
            <div key={el.path} className={styles[`${device}__link`]}>
              <CustomLink
                href={el.path}
                onClick={() => setIsOpen(false)}
                className={el.path === pathname ? styles.disable : ''}
              >
                {el.name}
              </CustomLink>
              <div
                className={`${el.path === pathname ? styles.active : ''} ${
                  styles.line
                }`}
              />
            </div>
          );
        })}
      </nav>
    </div>
  );
};
