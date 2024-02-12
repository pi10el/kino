export const paginControl = (
  countPage: number,
  currentPage: number,
): Array<number> => {
  const pages = [];

  if (countPage > 5) {
    if (currentPage > 3) {
      if (countPage - currentPage >= 2) {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
          if (i === countPage) break;
        }
      } else {
        for (let i = countPage - 4; i <= currentPage + 1; i++) {
          pages.push(i);
          if (i === countPage) break;
        }
      }
    } else {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
        if (i === countPage) break;
      }
    }
  } else {
    for (let i = 1; i <= countPage; i++) {
      pages.push(i);
    }
  }

  return pages;
};
