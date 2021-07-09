import Container from '@/components/container';
import { H1 } from '@/components/heading';

const ByLine = ({ date }) => {
  return (
    <div className="flex w-full justify-between text-gray-700 text-sm">
      <span>Natan Weinberger / {date}</span>
      <span>1 min read • 1 view</span>
    </div>
  );
};

const BlogPostHeader = () => {
  return (
    <>
      <H1>Why Herps Are Great</H1>
      <ByLine date="June 13, 2021" />
      <hr className="my-4" />
    </>
  );
};

export default () => (
  <Container>
    <BlogPostHeader />
    <p>They are lovely.</p>
    <p>Also, they are really nice.</p>
  </Container>
);
