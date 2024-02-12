'use client';

import { useRef } from 'react';

// redux
import { useSearchFilter } from '@/shared/lib/hooks/useSearchFilter';

// components
import { Container } from '@/shared/components/Container';
import SelectRange from '@/shared/components/SelectRange';

export const SelectsRange = () => {
  const { params, setFilter } = useSearchFilter();

  const timer = useRef<NodeJS.Timeout>();

  const rangeValue = (parse: string) =>
    parse?.length ? parse.split('-').map((el) => +el) : [];

  const rangeHandler = (min: number, max: number, field: string) => {
    clearTimeout(timer.current);

    const value = `${min}-${max}`;

    const result =
      value === '0-18' || value === '1894-2023' || value === '0-100'
        ? ''
        : value;

    timer.current = setTimeout(() => {
      setFilter({ page: '', [field]: result });
    }, 600);
  };

  return (
    <Container tag="div" variant="line">
      <SelectRange
        title="Года"
        min={1894}
        max={2023}
        step={1}
        symbol="г."
        initvalue={rangeValue(params.year)}
        onChange={({ min, max }) => rangeHandler(min, max, 'year')}
        plachholderSelect="Год"
      />
      <SelectRange
        title="Возраст"
        min={0}
        max={18}
        step={2}
        symbol="+"
        inputDisabled
        initvalue={rangeValue(params.age)}
        onChange={({ min, max }) => rangeHandler(min, max, 'age')}
      />
      <SelectRange
        title="Популярность"
        min={0}
        max={100}
        step={5}
        symbol="%"
        inputDisabled
        initvalue={rangeValue(params.popular)}
        onChange={({ min, max }) => rangeHandler(min, max, 'popular')}
      />
    </Container>
  );
};
