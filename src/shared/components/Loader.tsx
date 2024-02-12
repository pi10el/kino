interface CircleProps {
  color: string;
  radius: string;
  rotate: string;
  stroke: string;
}

const Circle = (props: CircleProps) => (
  <circle
    cx="50"
    cy="50"
    r={props.radius}
    strokeWidth="8"
    stroke={props.color}
    strokeDasharray={`${props.stroke} ${props.stroke}`}
    fill="none"
    strokeLinecap="round"
  >
    <animateTransform
      attributeName="transform"
      type="rotate"
      dur="1s"
      repeatCount="indefinite"
      keyTimes="0;1"
      values={`0 50 50;${props.rotate} 50 50`}
    ></animateTransform>
  </circle>
);

interface LoaderProps {
  height?: number;
}

const Loader = ({ height }: LoaderProps) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: 'inherit',
        height: height ? `${height}px` : 'inherit',
        backgroundColor: '#16212910',
      }}
    >
      <svg
        style={{
          height: 'inherit',
          maxHeight: '200px',
          margin: 'auto',
          background: 'none',
          display: 'block',
          shapeRendering: 'auto',
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <Circle radius="32" color="#5a8891" stroke="50.265" rotate="360" />
        <Circle radius="23" color="#456970" stroke="36.128" rotate="-360" />
      </svg>
    </div>
  );
};

export default Loader;
