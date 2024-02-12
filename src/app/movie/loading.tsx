import { Container } from '@/shared/components/Container';

const Loading = () => (
  <Container tag="div" variant="container-column">
    <section className="loader movie_head"></section>
    <section className="loader movie_persons"></section>
    <section className="loader movie_facts"></section>
    <section className="loader movie_film"></section>
    <section className="loader main_slider"></section>
  </Container>
);
export default Loading;
