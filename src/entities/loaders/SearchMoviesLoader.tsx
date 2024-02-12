const REPEAT = Array(15).fill('');

export const SearchMoviesLoader = () => (
  <div
    style={{
      marginBottom: 10,
      paddingBottom: 10,
      borderBottom: '1px solid var(--accent-dark)',
    }}
  >
    {REPEAT.map((_, i) => (
      <div className="loader search_card" key={i + 1} />
    ))}
  </div>
);
