export const ratingColor = (rating: number, bg?: boolean) => {
  const style = (color: string) =>
    !bg
      ? { color }
      : { backgroundColor: color, padding: '5px 10px', borderRadius: '5px' };

  if (rating <= 4.9) return style('#ff5032');
  else if (rating <= 6.9) return style('#fd9b27');
  else return style('#64c80a');
};
