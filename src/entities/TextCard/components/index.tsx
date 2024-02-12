import { CustomLink } from '@/features/CustomLink';

// styles
import styles from './styles.module.scss';

interface Props {
  path: string;
  text: string;
  color: string;
}

export const TextCard = ({ path, text, color }: Props) => {
  return (
    <CustomLink
      style={{ backgroundColor: color }}
      tabIndex={-1}
      className={styles.link}
      draggable={false}
      href={path}
    >
      {text}
    </CustomLink>
  );
};
