import { averageRating } from '../lib/averageRating';
import { ratingColor } from '../lib/ratingColor';

interface Props {
  rating: number | [number, number];
  className?: string;
  background?: boolean;
}

export const NumberRating = ({
  rating,
  className,
  background = false,
}: Props) => {
  if (typeof rating === 'object')
    return (
      <span
        className={className}
        style={ratingColor(averageRating(rating[0], rating[1]), background)}
      >
        {averageRating(rating[0], rating[1]).toFixed(1)}
      </span>
    );

  return (
    <span className={className} style={ratingColor(rating)}>
      {rating.toFixed(1)}
    </span>
  );
};
