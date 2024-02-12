const arrayFilling = (start: number, end: number) => {
  const result = [];

  for (let i = start; i <= end; i++) {
    result.push(i.toString());
  }

  return result.reverse();
};

export default arrayFilling;
