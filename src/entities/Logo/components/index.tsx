import Image from 'next/image';
import Link from 'next/link';

// images
import logo from '../../../shared/assets/image/logo.svg';

// styles
import styles from './styles.module.scss';

interface Props {
  isText?: boolean;
}

export const Logo: React.FC = ({ isText = true }: Props) => (
  <Link href="/" className={styles.logo}>
    <Image src={logo} alt="Kino_logo" width={40} height={40} quality={90} />
    {isText && <h1>Kino</h1>}
  </Link>
);
