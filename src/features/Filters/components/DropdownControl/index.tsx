// styles
import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
}

export const DropdownControl = ({ children }: Props) => {
  return <div className={styles.content}>{children}</div>;
};
