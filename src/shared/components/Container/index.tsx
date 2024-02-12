// styles
import styles from './styles.module.scss';

interface Props {
  tag: 'div' | 'section';
  variant:
    | 'container-column'
    | 'container-line'
    | 'movies'
    | 'movie'
    | 'line'
    | 'tags';
  children: React.ReactNode;
}

export const Container = ({ children, tag, variant }: Props) => {
  const Component = tag;

  return <Component className={styles[variant]}>{children}</Component>;
};
