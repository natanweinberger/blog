import Link from 'next/link';
import Container from '@/components/container';
import { H1, H2 } from '@/components/heading';

const BlogPostTitle = ({ children }) => (
  <h3 className="font-semibold text-md md:text-lg text-blue-700">
    {children}
  </h3>
);

const BlogPost = ({ title, description, slug, published }) => {
  return (
    <div className="flex flex-col" key="slug">
    {published != false && 
      <Link href={`blog/${slug}` || '/'}>
        <a>
          <BlogPostTitle>{title}</BlogPostTitle>

          <span>{description}</span>
        </a>
      </Link>
    }
    {published == false && <>
      <h3 className="font-semibold text-md md:text-lg">
        {title}
      </h3>

      <span>{description}</span></>}
    </div>
  );
};

const posts = [
  {
    title: 'Hunting for the cause behind slow joins in MySQL',
    slug: 'mysql-charsets',
  },
  {
    title: 'When writing good code matters',
    description: 'Coming soon...',
    slug: 'when-writing-good-code-matters',
    published: false,
  },
  {
    title: 'Fast ethernet, slow wi-fi',
    description: 'Coming soon...',
    slug: 'when-writing-good-code-matters',
    published: false,
  }
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
