'use client';

import type { ChangeEvent } from 'react';

import { useEffect, useRef, useState } from 'react';

// helpers
import arrayFilling from '@/shared/lib/helpers/arrayFilling';

// components
import Select from '../Select';

// styles
import styles from './styles.module.scss';

interface Props {
  min: number;
  max: number;
  step: number;
  title: string;
  symbol: string;
  onChange: ({ min, max }: { min: number; max: number }) => void;
  inputDisabled?: boolean;
  initvalue?: Array<number>;
  plachholderSelect?: string;
}

const SelectRange: React.FC<Props> = ({
  min,
  max,
  step,
  title,
  symbol,
  onChange,
  inputDisabled,
  initvalue,
  plachholderSelect,
}) => {
  //state для двусторойнний связки инпутов
  const [minInputVal, setMinInputVal] = useState(min);
  const [maxInputVal, setMaxInputVal] = useState(max);

  //state для вычеслений положения ползунков
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const [minRange, setMinRange] = useState(0);

  //ссылка на трек между ползунками
  const rangeRef = useRef<HTMLDivElement>(null);

  //получаем максимальное значение для ползунка минимальной цены
  const minValParse = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxVal);
    return value;
  };

  //получаем минимальное значение для ползунка максимальной цены
  const maxValParse = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minVal);
    return value;
  };

  //отслеживаем события на инпутах
  const maxEventHandler = () => {
    const value = Math.max(maxInputVal, minVal);
    setMaxInputVal(value);
    setMaxVal(value);

    onChange({ min: minVal, max: value });
  };

  const minEventHandler = () => {
    const value = Math.max(minInputVal, min);
    setMinInputVal(value);
    setMinVal(value);

    onChange({ min: value, max: maxVal });
  };

  //отслеживаем изменение значений значений и ширины полоски ползунка, перерисовываем трек и вызываем callback
  useEffect(() => {
    const minPointPercent = ((minVal - min) / (max - min)) * 100;
    const maxPointPercent = ((maxVal - min) / (max - min)) * 100;

    const offset = 100 - ((maxVal - minVal) / (max - min)) * 100;
    const addRange = (offset * minRange) / 100;

    const offsetMin = ((max - minVal) / (max - min)) * minRange;
    const offsetMax = ((maxVal - min) / (max - min)) * minRange;

    const left = minPointPercent + (offsetMin - offsetMax - addRange) / 2;
    const width = maxPointPercent - minPointPercent + addRange;

    if (rangeRef.current) {
      rangeRef.current.style.left = `${left}%`;
      rangeRef.current.style.width = `${width}%`;
    }
  }, [minVal, maxVal]);

  useEffect(() => {
    setMinVal(initvalue?.length ? initvalue[0] : min);
    setMinInputVal(initvalue?.length ? initvalue[0] : min);
    setMaxVal(initvalue?.length ? initvalue[1] : max);
    setMaxInputVal(initvalue?.length ? initvalue[1] : max);
  }, [initvalue?.length]);

  useEffect(() => {
    if (rangeRef.current) {
      setMinRange((40 * 100) / rangeRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className={styles.content}>
      <p>{title}</p>
      <div className={styles.labels}>
        <label htmlFor="min">
          <input
            id="min"
            type="number"
            disabled={inputDisabled}
            value={minInputVal}
            onChange={(e) => setMinInputVal(minValParse(e))}
            onKeyUp={(e) => {
              if (e.key === 'Enter') minEventHandler();
            }}
            onBlur={minEventHandler}
            style={{ opacity: !inputDisabled ? 1 : 0.6 }}
          />
          {symbol}
        </label>
        <label htmlFor="max">
          <input
            id="max"
            type="number"
            disabled={inputDisabled}
            value={maxInputVal}
            onChange={(e) =>
              setMaxInputVal(Math.min(Number(e.target.value), max))
            }
            onKeyUp={(e) => {
              if (e.key === 'Enter') maxEventHandler();
            }}
            onBlur={maxEventHandler}
            style={{ opacity: !inputDisabled ? 1 : 0.6 }}
          />
          {symbol}
        </label>
        {plachholderSelect && (
          <Select
            placeholder={plachholderSelect}
            items={arrayFilling(min, max)}
            onSelect={(item) => {
              setMinVal(+item);
              setMinInputVal(+item);

              setMaxVal(+item);
              setMaxInputVal(+item);

              onChange({ min: +item, max: +item });
            }}
          />
        )}
      </div>
      <div className={styles.inputs}>
        <input
          className={styles.thumb}
          type="range"
          step={step}
          min={min}
          max={max}
          value={minVal}
          onChange={(e) => {
            const value = minValParse(e);
            setMinVal(+value);
            setMinInputVal(+value);
            onChange({ min: value, max: maxVal });
          }}
        />
        <input
          className={styles.thumb}
          type="range"
          step={step}
          min={min}
          max={max}
          value={maxVal}
          onChange={(e) => {
            const value = maxValParse(e);
            setMaxVal(+value);
            setMaxInputVal(+value);

            onChange({ min: minVal, max: value });
          }}
        />

        <div className={styles.slider}>
          <div className={styles.track} />
          <div ref={rangeRef} className={styles.range} />
        </div>
      </div>
    </div>
  );
};

export default SelectRange;
