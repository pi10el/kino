export const averageRating = (kp: number, imdb: number) => {
  const count = [kp, imdb].filter((el) => el).length;

  return Number((kp + imdb) / count) || 0;
};
