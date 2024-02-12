'use client';

// custom hook
import { useSearchFilter } from '@/shared/lib/hooks/useSearchFilter';

// const
import { TYPES } from '@/shared/consts/TYPES';

//components
import { Container } from '@/shared/components/Container';
import { Tag } from './Tag';

export const ParamsTags = () => {
  const { params, setFilter } = useSearchFilter();

  const tags = (tag: string) => {
    switch (tag) {
      case 'popular':
        return 'Популярность: ';
      case 'age':
        return 'Возраст: ';
      case 'year':
        return 'Год: ';
      default:
        return '';
    }
  };

  const isDisabled = !Object.keys(params).filter(
    (el) => params[el] !== '' && el !== 'page',
  ).length;

  return (
    <Container tag="div" variant="tags">
      <Tag disabled={isDisabled} onClick={() => setFilter()} />
      {Object.keys(params).map((el) => {
        const isArray = el === 'country' || el === 'genres' || el === 'type';
        const isString = params[el] && el !== 'page';

        if (isArray && params[el].length) {
          return params[el].split(',').map((elArr) => (
            <Tag
              key={`${elArr}${params[el]}`}
              text={el === 'type' ? TYPES[+elArr] : elArr}
              onClick={() =>
                setFilter({
                  page: '',
                  [el]:
                    params[el]
                      .split(',')
                      .filter((f) => f !== elArr)
                      .join(',') || '',
                })
              }
            />
          ));
        } else if (isString) {
          return (
            <Tag
              key={el}
              text={`${tags(el)}${params[el]}`}
              onClick={() => setFilter({ page: '', [el]: '' })}
            />
          );
        }
      })}
    </Container>
  );
};
