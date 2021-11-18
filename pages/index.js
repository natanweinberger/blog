import Container from '@/components/container';
import { H1 } from '@/components/heading';

const Home = () => (
  <Container>
    <H1>Natan Weinberger</H1>
    <div className="text-gray-600 dark:text-gray-400 space-y-4">
    <p>
      Staff Data Engineer at Shopify
    </p>
    <p>
    Trying my best.
    </p>
    </div>
  </Container>
);

export default Home;
