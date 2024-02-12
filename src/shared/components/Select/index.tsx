'use client';

import { useEffect, useRef, useState } from 'react';

// styles
import styles from './styles.module.scss';

interface Props {
  placeholder: string;
  items: Array<string>;
  onSelect: (item: string, id: number) => void;
  arrayQuery?: Array<string>;
  title?: string;
  input?: boolean;
}

const Select: React.FC<Props> = ({
  title,
  placeholder,
  items,
  arrayQuery,
  onSelect,
  input = false,
}) => {
  const [value, setValue] = useState('');

  //state для контроля стилей dropdown
  const [[height, opacity], setStyle] = useState([0, 0]);

  //нужно для хранения максимальной высоты dropdown из расчета всех элементов
  const [maxHeight, setMaxHeight] = useState(0);

  //ссылка для получения высоты одного элемента
  const refItem = useRef<HTMLButtonElement>(null);

  //высчитываем полную высоту dropdown из расчета всех элементов
  useEffect(() => {
    if (refItem.current) {
      setMaxHeight(refItem.current.clientHeight * items.length);
    }
  }, []);

  const clickSelect = () => {
    setStyle(height === 0 ? [maxHeight, 1] : [0, 0]);
  };
  const closeDropdown = () => setStyle([0, 0]);

  return (
    <div className={styles.content}>
      {title ? <p className={styles.title}>{title}</p> : null}
      <button
        className={styles.select}
        onClick={clickSelect}
        onBlur={() => {
          setValue('');
          closeDropdown();
        }}
      >
        {input ? (
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          <span>{placeholder}</span>
        )}

        <svg
          viewBox="0 0 16 16"
          style={height !== 0 ? { transform: 'scaleY(1)' } : {}}
        >
          <path
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708
          L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      </button>
      <div className={styles.dropdown} style={{ height, opacity }}>
        <div>
          {items
            .filter((el) => {
              if (el === items[0]) return el;

              if (value) {
                return (
                  value.toLowerCase() ===
                  el.substring(0, value.length).toLowerCase()
                );
              } else {
                return el;
              }
            })
            .map((el, i) => (
              <button
                ref={refItem}
                type="button"
                key={el + i}
                disabled={
                  !!arrayQuery?.filter((f) => f === el || f === i.toString())
                    .length
                }
                onMouseDown={() => onSelect(el, i)}
              >
                {el}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
