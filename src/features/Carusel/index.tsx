'use client';

import { useState } from 'react';
import { AnimatePresence, motion, wrap } from 'framer-motion';

// types
import type { Point, Variants } from 'framer-motion';

// styles
import styles from './styles.module.scss';

// consts
const VARIANTS: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 1,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

interface Props {
  itemsLength: number;
  onRenderSlide: (slide: number) => React.ReactNode;
  title?: string;
  className?: string;
}

export const Carusel = ({ title, itemsLength, className, ...props }: Props) => {
  const [isDrag, setDrag] = useState(false);

  const [[slide, direction], setPage] = useState([0, 0]);

  const slideIndex = wrap(0, itemsLength, slide);

  const paginate = (newDir: number) => {
    setPage([slide + newDir, newDir]);
  };

  const dotClick = (i: number) => {
    if (i !== slideIndex) paginate(i - slide);
  };

  const swipeHandler = (offset: Point, velocity: Point) => {
    const swipePower = 1;
    const swipe = Math.abs(offset.x) * velocity.x;

    if (swipe > 5000 || swipe < -5000) {
      if (swipe > swipePower) paginate(-1);
      else paginate(1);
    }
  };

  return (
    <section className={className}>
      <AnimatePresence mode="sync" initial={false} custom={direction}>
        {title && <h1>{title}</h1>}
        <motion.div
          suppressHydrationWarning
          className={styles.slide}
          key={slide}
          style={{ pointerEvents: isDrag ? 'none' : 'all' }}
          custom={direction}
          variants={VARIANTS}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, type: 'spring' }}
          dragConstraints={{ left: 0, right: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          drag="x"
          dragElastic={0.1}
          onDragStart={() => setDrag(true)}
          onDragEnd={(_, { offset, velocity }) => {
            setDrag(false);
            swipeHandler(offset, velocity);
          }}
        >
          {props.onRenderSlide(slideIndex)}
        </motion.div>
      </AnimatePresence>

      <div className={styles.dots}>
        {Array(itemsLength)
          .fill('')
          .map((_, i) => (
            <div key={i} className={styles.dots__item}>
              <button
                type="button"
                aria-label="dot"
                onClick={() => dotClick(i)}
              />
              {i === slideIndex && (
                <motion.div
                  suppressHydrationWarning
                  layoutId="caruselDot"
                  transition={{ duration: 0.3, type: 'spring' }}
                />
              )}
            </div>
          ))}
      </div>
    </section>
  );
};
