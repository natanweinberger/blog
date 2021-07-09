import Link from 'next/link';
import Container from '@/components/container';
import { H2 } from '@/components/heading';

const BlogPostTitle = ({ children }) => (
  <h3 className="font-semibold text-md md:text-lg text-black dark:text-white">
    {children}
  </h3>
);

const BlogPost = ({ title, description, slug }) => {
  return (
    <div className="flex flex-col">
      <Link href={`blog/${slug}` || '/'}>
        <a>
          <BlogPostTitle>{title}</BlogPostTitle>

          <span className="text-gray-700">{description}</span>
        </a>
      </Link>
    </div>
  );
};

const posts = [
  {
    title: 'Why Herps are great',
    description: 'I love them a lot and you should too.',
    slug: 'why-herps-are-great',
  },
  {
    title: "What's the deal with borders?",
    description: 'What do we need them for anyways?',
    slug: 'borders',
  },
  {
    title: 'Where are all these crumbs coming from?',
    description: 'A deep dive into the couch cushions.',
    slug: 'where-are-all-these-crumbs-coming-from',
  },
];

const Blog = () => {
  return (
    <Container>
      <H2>Posts</H2>
      <div className="flex flex-col space-y-6">
        {posts.map((post) => (
          <BlogPost {...post} />
        ))}
      </div>
    </Container>
  );
};

export default Blog;
