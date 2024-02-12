'use client';

import { useRef, useState } from 'react';

// styles
import styles from './styles.module.scss';

// components
import { Overlay } from '@/shared/components/Overlay';
import { Dropdown } from './Dropdown';
import { Input } from './Input';

export const Search = () => {
  const timer = useRef<NodeJS.Timeout>();

  const [value, setValue] = useState('');
  const [request, setRequest] = useState('');
  const [isFocus, setFocus] = useState(false);

  const onRequest = (data?: string) => {
    clearTimeout(timer.current);

    data !== undefined && setValue(data);

    timer.current = setTimeout(() => {
      setRequest(data !== undefined ? data : value);
    }, 600);
  };

  return (
    <div className={styles.search}>
      <Input
        value={value}
        request={request}
        onRequest={onRequest}
        isFocus={isFocus}
        setFocus={setFocus}
      />

      {isFocus && value && <Dropdown value={request} />}

      <Overlay isVisible={isFocus} />
    </div>
  );
};
