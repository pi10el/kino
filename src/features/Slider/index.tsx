'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

// components
import { IconArrow } from '@/shared/components/icons/IconArrow';

// styles
import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
  height: number;
  title?: string;
  titleMargin?: number;
  arrowMargin?: number;
  marginTop?: number;
  blank?: {
    lenght: [max: number, count: number];
    width: number;
    text: string;
  };
}

export const Slider = ({ children, ...props }: Props) => {
  const {
    title,
    height,
    blank,
    marginTop = 0,
    titleMargin = 0,
    arrowMargin = 0,
  } = props;

  const countBlank = blank ? blank.lenght[0] - blank.lenght[1] : 0;
  const countItem = blank ? blank.lenght[0] - countBlank : 0;

  const refTrack = useRef<HTMLDivElement>(null);
  const refContainer = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  const [left, setLeft] = useState(0);
  const [position, setPosition] = useState(0);

  const [isDrag, setIsDrag] = useState(false);

  const handleTransition = () => {
    const offset =
      refTrack.current?.style['transform']
        .split(' ')[0]
        .replace(/[^\-\.\d]/g, '') || 0;

    x.set(+offset);

    setPosition(x.get());
  };

  const resize = typeof window !== 'undefined' ? window.innerWidth : 0;

  useEffect(() => {
    const initHandler = () => {
      const windowWidth = window.innerWidth;
      const containerWidth = refContainer.current?.clientWidth || 0;
      const boxWidth = refTrack.current?.clientWidth || 0;

      const width = windowWidth - boxWidth - (windowWidth - containerWidth);

      setLeft(width >= 0 ? 0 : width);
    };

    initHandler();
  }, [resize]);

  return (
    <section
      className={styles.slider}
      style={{
        height: (title ? 23 : 0) + height + titleMargin,
        marginTop,
      }}
    >
      {title && <h1 style={{ marginBottom: titleMargin }}>{title}</h1>}

      <div className={styles.content} style={{ height }}>
        {blank && !blank.lenght[1] ? (
          <p className={styles.empty}>{blank?.text}</p>
        ) : (
          <>
            <div
              className={`${styles.arrow} ${position < 0 ? '' : styles.hidden}`}
              style={{
                left: arrowMargin,
                height,
              }}
            >
              <IconArrow direction="left" />
            </div>

            <div
              className={`${styles.arrow} ${
                position > left ? '' : styles.hidden
              }`}
              style={{
                right: arrowMargin,
                height,
                transform: 'scaleX(-1)',
              }}
            >
              <IconArrow direction="left" />
            </div>

            <div ref={refContainer} className={styles.track}>
              <motion.div
                suppressHydrationWarning
                ref={refTrack}
                drag="x"
                dragConstraints={{ left, right: 0 }}
                onDragStart={() => {
                  setIsDrag(true);
                }}
                onDrag={() => setPosition(x.get())}
                onDragEnd={() => setIsDrag(false)}
                onTransitionEnd={() => setPosition(x.get())}
                dragTransition={{ bounceStiffness: 700, bounceDamping: 50 }}
                onDragTransitionEnd={() => handleTransition()}
                dragElastic={0.5}
                style={{
                  display: 'flex',
                  position: 'absolute',
                  height: '100%',
                  x,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    pointerEvents: isDrag ? 'none' : 'all',
                  }}
                >
                  {children}
                </div>
                {blank && countBlank > 0 && (
                  <div
                    className={styles.blank}
                    style={{
                      left: blank.width * countItem + countItem * 15,
                    }}
                  >
                    {Array(countBlank)
                      .fill('')
                      .map((_, i) => (
                        <div key={i + 1} style={{ width: blank.width }} />
                      ))}
                  </div>
                )}
              </motion.div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
