export const ageColor = (rating: number | string | null) => {
  const style = (color: string) => ({
    color,
    padding: '2px 4px',
    border: `1px solid ${color}`,
  });

  switch (Number(rating)) {
    case 0:
      return style('#94bc70');
    case 6:
      return style('#94bc70');

    case 12:
      return style('#d2aa6c');

    case 16:
      return style('#d28c80');

    default:
      return style('#d28c80');
  }
};
