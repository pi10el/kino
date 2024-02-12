import Link from 'next/link';

// styles
import styles from './styles.module.scss';

// components
import IconGithub from '@/shared/components/icons/IconGithub';

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className="wrapper">
      <span>Created by Pi10el</span>
      <Link href="https://github.com/pi10el" target="_blank">
        <IconGithub />
      </Link>
    </div>
  </footer>
);
