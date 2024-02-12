// consts
import { GENRES } from '@/shared/consts/GENRES';
import { TYPES } from '@/shared/consts/TYPES';

// components
import { TextCard } from '@/entities/TextCard';
import { Slider } from '@/features/Slider';

const bgGenres = [
  '#748c6330',
  '#c58e6e30',
  '#80765630',
  '#6d706230',
  '#739b8f30',
  '#8b769430',
  '#c58e6e30',
  '#80765630',
  '#739b8f30',
  '#64906830',
  '#874a4c30',
  '#85934230',
  '#c58e6e30',
  '#80775430',
  '#6d706230',
  '#605d6e30',
  '#748c6330',
  '#85934230',
  '#615d6c30',
  '#80765630',
  '#6d706230',
  '#c58e6e30',
  '#739b8f30',
  '#748c6330',
  '#605d6e30',
  '#874a4c30',
  '#8c769330',
  '#85934230',
  '#6d706230',
  '#c4906c30',
];

const bgTypes = [
  '#80765630',
  '#605d6e30',
  '#c58e6e30',
  '#739b8f30',
  '#64906830',
  '#6d706230',
];

export const GenreTypeSlider = () => {
  return (
    <>
      <Slider height={50} marginTop={30}>
        {GENRES.filter((_, i) => i !== 0).map((el, i) => (
          <TextCard
            color={bgGenres[i]}
            key={el}
            text={el.charAt(0).toUpperCase() + el.slice(1)}
            path={`/search?genres=${el}`}
          />
        ))}
      </Slider>
      <Slider height={50} marginTop={15}>
        {TYPES.filter((_, i) => i !== 0).map((el, i) => (
          <TextCard
            color={bgTypes[i]}
            key={el}
            text={el}
            path={`/search?type=${i + 1}`}
          />
        ))}
      </Slider>
    </>
  );
};
