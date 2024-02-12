import Link from 'next/link';

// styles
import styles from './styles.module.scss';

//components
import { CustomImage } from '@/shared/components/CustomImage';

interface Props {
  slide: TPremiereMovieProps;
}

export const NoveltySlide = ({ slide }: Props) => {
  return (
    <Link draggable={false} href={`/movie/${slide.id}`}>
      {!slide.backdrop.src ? (
        <>
          <div className={styles.overlay}>
            <CustomImage
              src={slide.poster.src}
              alt={slide.name}
              blurDataURL={slide.poster.blur}
            />
            <div />
          </div>

          <div className={styles.img}>
            <CustomImage
              src={slide.poster.src}
              alt={slide.name}
              blurDataURL={slide.poster.blur}
            />
          </div>
        </>
      ) : (
        <CustomImage
          className={styles.backdrop}
          alt={slide.name}
          src={slide.backdrop.src}
          blurDataURL={slide.backdrop.blur}
        />
      )}

      <div className={styles.content}>
        <h2>{slide.name}</h2>
        <span>{slide.description}</span>
      </div>
    </Link>
  );
};
