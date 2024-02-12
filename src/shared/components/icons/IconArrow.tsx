interface Props {
  direction: 'left' | 'top' | 'right' | 'bottom';
}

export const IconArrow = ({ direction }: Props) => {
  const transform = () => {
    switch (direction) {
      case 'top':
        return 'rotateZ(90deg)';

      case 'right':
        return 'rotateZ(180deg)';

      case 'bottom':
        return 'rotateZ(270deg)';

      default:
        undefined;
    }
  };

  return (
    <svg style={{ transform: transform() }} viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      />
    </svg>
  );
};
