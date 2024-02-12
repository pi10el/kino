import { parseType } from '@/shared/lib/helpers/parseType';
import { movieServices } from '@/shared/services/movie';

interface Props {
  children: React.ReactNode;
}

interface Params {
  params: {
    id: number;
  };
}

export async function generateMetadata({ params }: Params) {
  const { name, alternativeName, enName, description, year, type } =
    await movieServices.getMovie(params.id);

  const title = name || alternativeName || enName || '';
  const altTitle = title && alternativeName ? alternativeName || enName : '';

  const desc =
    `${title} ${parseType(
      type,
    )} ${year}, смотреть онлайн HD, 720, 1080, 2160 бесплатно в хорошем качестве. ${description}` ||
    undefined;

  return {
    title: `${title}: (${year}) - смотреть онлайн HD, 720, 1080, 2160 бесплатно в хорошем качестве.`,
    description: desc,
    keywords: [
      `${title}`,
      `(${year})`,
      altTitle,
      'смотреть',
      'бесплатно',
      'онлайн',
      'HD',
      'фильм',
      'сериал',
      'кино',
      'фотографии',
      'обзор',
      'комментарии',
      'рейтинг',
      'факты',
      'отзывы',
      'кадры',
      'новости',
      'сайт',
    ].join(' '),
  };
}

const MovieLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default MovieLayout;
