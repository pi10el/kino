// styles
import styles from './styles.module.scss';

export const SearchEmptyResult: React.FC = () => (
  <div className={styles.content}>
    <p>По вашему запросу ничего не найдено.</p>
  </div>
);
