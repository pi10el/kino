// components
import { IconClose } from '@/shared/components/icons/IconClose';
import { IconTrash } from '@/shared/components/icons/IconTrash';

// styles
import styles from './styles.module.scss';

interface Props {
  text?: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Tag = ({ text, onClick, disabled }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.tag} ${disabled ? styles.disabled : ''}`}
    >
      {text ? (
        <>
          <span>{text}</span>
          <div>
            <IconClose />
          </div>
        </>
      ) : (
        <IconTrash />
      )}
    </button>
  );
};
