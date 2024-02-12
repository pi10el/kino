export const parseMovieLength = (movieLength: number) => {
  const hour = Math.trunc(movieLength / 60);
  const isHour = !!hour ? `${hour} ч. ` : '';

  const minute = movieLength % 60;
  const isMinute = !!minute ? `${minute} мин.` : '';

  return `${movieLength}мин. / ${isHour}${isMinute}`;
};
