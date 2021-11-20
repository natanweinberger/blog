import Link from 'next/link';
import Container from '@/components/container';
import { H1, H2 } from '@/components/heading';

const BlogPostTitle = ({ children }) => (
  <h3 className="font-semibold text-md md:text-lg text-blue-700 dark:text-white">
    {children}
  </h3>
);

const BlogPost = ({ title, description, slug }) => {
  return (
    <div className="flex flex-col">
      <Link href={`blog/${slug}` || '/'}>
        <a>
          <BlogPostTitle>{title}</BlogPostTitle>

          {/*<span>{description}</span>*/}
        </a>
      </Link>
    </div>
  );
};

const posts = [
  {
    title: 'What makes a good interview question?',
    description: 'There will be more to come.',
    slug: 'my-first-post',
  },
];

const Blog = () => {
  return (
    <Container>
      <H1>Posts</H1>
      <div className="flex flex-col space-y-6 py-4">
        {posts.map((post) => (
          <BlogPost {...post} />
        ))}
      </div>
    </Container>
  );
};

export default Blog;
