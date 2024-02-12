export const parsePersons = (persons: IPersonMovie[], professon: string) => {
  const array: string[] = [];

  persons?.forEach((el) => {
    if (el.profession === professon && el.name) array.push(el.name);
  });

  return array.join(', ');
};
