// styles
import styles from './styles.module.scss';

// components
import { IconSearch } from '@/shared/components/icons/IconSearch';
import { IconClose } from '@/shared/components/icons/IconClose';

interface Props {
  value: string;
  request: string;
  isFocus: boolean;
  onRequest: (value?: string) => void;
  setFocus: (status: boolean) => void;
}

export const Input = ({
  value,
  request,
  isFocus,
  setFocus,
  onRequest,
}: Props) => (
  <div className={`${styles.input} ${!isFocus ? '' : styles.focus}`}>
    <label
      htmlFor="navbar_search"
      className={`${styles.set} ${isFocus ? styles.focus : ''} ${
        value === request ? styles.active : ''
      }`}
    >
      <IconSearch />
    </label>
    <input
      type="text"
      id="navbar_search"
      placeholder="Поиск фильма..."
      value={value}
      onBlur={() =>
        setTimeout(() => {
          if (value !== request) onRequest();
          setFocus(false);
        }, 150)
      }
      onFocus={() => setFocus(true)}
      onChange={(e) => onRequest(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Delete') onRequest('');
      }}
    />
    <button
      type="button"
      className={styles.clear}
      disabled={!value}
      onClick={() => onRequest('')}
    >
      <IconClose />
    </button>
  </div>
);
