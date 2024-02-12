// component
import { Logo } from '@/entities/Logo';
import { Navigation } from './Navigation';
import { Search } from '@/features/Search';

// styles
import styles from './styles.module.scss';

export const Navbar: React.FC = () => {
  return (
    <header className={styles.navbar}>
      <div className="wrapper">
        <div className={styles.content}>
          <Logo />
          <Navigation device="desktop" />
          <Search />
          <Navigation device="mobile" />
        </div>
      </div>
    </header>
  );
};
