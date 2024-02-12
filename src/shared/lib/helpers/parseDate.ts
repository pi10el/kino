const parseDate = (date: string) => {
  return new Date(date).toLocaleString('ru', {
    month: 'long',
    day: 'numeric',
  });
};

export default parseDate;
