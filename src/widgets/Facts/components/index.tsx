'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

// styles
import styles from './styles.module.scss';

// components
import { Slider } from '@/features/Slider';
import { Item } from './Item';

interface Props {
  facts: IFact[];
}

export const Facts = ({ facts }: Props) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const sortFacts = facts?.sort(
    (a, b) => Number(a.spoiler) - Number(b.spoiler)
  );

  return (
    <>
      <Slider
        height={93}
        title="А вы знали, что…"
        marginTop={30}
        titleMargin={15}
        blank={{
          lenght: [4, facts?.length],
          width: 308.8,
          text: 'Факты и киноляпы отсутствуют.',
        }}
      >
        {sortFacts?.map((el, i) => (
          <motion.div
            key={i + 1}
            layoutId={i.toString()}
            className={`${styles.fact} ${styles.noactive}`}
          >
            <Item active={false} fact={el} onClick={() => setSelectedId(i)} />
          </motion.div>
        ))}
      </Slider>
      {selectedId !== null && (
        <motion.div className={styles.modal}>
          <motion.div layoutId={selectedId.toString()} className={styles.fact}>
            <Item active={true} fact={facts[selectedId]} />
          </motion.div>
          <button
            onClick={() => setSelectedId(null)}
            className={styles.overlay}
          />
        </motion.div>
      )}
    </>
  );
};
