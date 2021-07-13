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
      <H1>My First Post</H1>
      <ByLine date="June 13, 2021" />
      <hr className="my-4" />
    </>
  );
};

const Post = () => (
  <Container>
    <BlogPostHeader />
    <p>My first post</p>
  </Container>
);


export default Post;