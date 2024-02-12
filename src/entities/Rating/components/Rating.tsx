// components
import { NumberRating } from './NumberRating';

interface Props {
  rating: IRating;
  classRating?: string;
  fullName?: boolean;
}

export const Rating = ({ rating, classRating, fullName = false }: Props) => (
  <>
    <div className={classRating}>
      <div>
        <p>{fullName ? 'Кинопоиск' : 'КП'}</p>
        <NumberRating rating={rating.kp} />
      </div>
      <div>
        <p>IMDb</p>
        <NumberRating rating={rating.imdb} />
      </div>
      <div>
        <p>Критики</p>
        <NumberRating rating={rating.filmCritics} />
      </div>
    </div>
  </>
);
