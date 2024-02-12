import { Container } from '@/shared/components/Container';

const SearchLoading = () => (
  <Container tag="div" variant="container-line">
    <section className="loader search_filters" />
    <section className="loader search_list" />
  </Container>
);

export default SearchLoading;
