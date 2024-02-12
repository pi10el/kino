import { CSSProperties } from 'react';

// components
import { IconEyeSlash } from '@/shared/components/icons/IconEyeSlash';

// styles
import styles from './styles.module.scss';

interface Props {
  fact: IFact;
  active: boolean;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
}

const parseFact = (type: 'FACT' | 'BLOOPER') => {
  return type === 'FACT' ? 'Факт' : 'Киноляп';
};

export const Item = ({ fact, onClick, active, style }: Props) => {
  return (
    <>
      <button
        onClick={onClick}
        style={{
          filter: fact.spoiler && !active ? 'blur(5px)' : 'blur(0px)',
          ...style,
        }}
        className={styles.fact}
      >
        <span>{parseFact(fact.type)}</span>
        <p dangerouslySetInnerHTML={{ __html: fact.value }} />
      </button>
      {!active && fact.spoiler && (
        <div className={styles.spoiler}>
          <IconEyeSlash />
          <span>спойлер</span>
        </div>
      )}
    </>
  );
};
