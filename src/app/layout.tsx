// fonts
import { Comfortaa } from 'next/font/google';

// styles
import '../views/styles/globals.scss';
import '../views/styles/loaders.scss';

// components
import { WithStore } from '@/views';
import { ScrollRestoration } from '@/features/ScrollRestoration';
import { Navbar } from '@/widgets/Navbar';
import { Footer } from '@/widgets/Footer';

const comfortaa = Comfortaa({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

interface Props {
  children: React.ReactNode;
}

export { metadata } from './metadata';

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="ru" className={comfortaa.className}>
      <body>
        <WithStore>
          <ScrollRestoration>
            <Navbar />
            <main className="wrapper">{children}</main>
            <Footer />
          </ScrollRestoration>
        </WithStore>
      </body>
    </html>
  );
};

export default RootLayout;
