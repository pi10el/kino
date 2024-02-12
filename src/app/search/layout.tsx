interface Props {
  children: React.ReactNode;
}

const SearchLayout = ({ children }: Props) => {
  return <div className="searchWrapper">{children}</div>;
};

export default SearchLayout;
