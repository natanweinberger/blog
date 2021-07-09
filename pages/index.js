import Container from '@/components/container';
import { H1 } from '@/components/heading';

const Home = () => (
  <Container>
    <H1>Hey, I'm Natan</H1>
    <p className="text-gray-600 dark:text-gray-400">
      I'm a software engineer in Montréal. I work at SSENSE as the Tech Lead for
      the Data Engineering team.
    </p>
  </Container>
);

export default Home;
