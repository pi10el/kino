// styles
import styles from './styles.module.scss';

interface Props {
  isVisible: boolean;
  onClick?: () => void;
}

export const Overlay = ({ isVisible, onClick }: Props) => (
  <button
    aria-label="overlay"
    className={styles.overlay}
    disabled={!isVisible}
    onClick={onClick}
  />
);
