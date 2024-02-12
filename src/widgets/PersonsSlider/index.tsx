// components

import { PersonCard } from '@/entities/PersonCard';
import { Slider } from '@/features/Slider';

interface Props {
  persons: IPersonMovie[];
}

export const PersonsSlider = ({ persons }: Props) => {
  return (
    <Slider
      height={225}
      title="Актеры и съемочная группа"
      titleMargin={15}
      marginTop={30}
      blank={{
        width: 225,
        lenght: [10, persons?.length],
        text: 'Информация об актерах и съмочной группе отсутвует',
      }}
    >
      {persons?.map((card) => (
        <PersonCard key={card.id + (card.enProfession || '')} person={card} />
      ))}
    </Slider>
  );
};
