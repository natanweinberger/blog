import React from 'react'
import Link from 'next/link';
import Container from '@/components/container';
import { H1, H2 } from '@/components/heading';

const BlogPostTitle = ({ published, children }) => {
  const textColor = published != false ? 'text-blue-700' : 'text-black'

  return (
  <h3 className={`font-semibold text-md md:text-lg ${textColor}`}>
    {children}
  </h3>
  )
};

const BlogPost = ({ title, description, slug, published }) => {
  const shouldMakePostLinkable = published != false || process.env.NEXT_PUBLIC_ENV == 'dev';
  const createLinkToPost = (children) => <Link href={`/blog/${slug}`} passHref legacyBehavior>{children}</Link>

  const UnlinkedListing = React.forwardRef(({ href }, ref)  => (
    <a href={href} ref={ref}>
      <BlogPostTitle published={shouldMakePostLinkable}>{title}</BlogPostTitle>
      <span>{description}</span>
    </a>
  ))

  return shouldMakePostLinkable ? createLinkToPost(<UnlinkedListing />) : <UnlinkedListing />
};

const posts = [
  {
    title: 'Hunting for the cause behind slow joins in MySQL',
    slug: 'mysql-charsets',
    date: '2020-09-01',
  },
  {
    title: 'Maintainable code as a competitive advantage',
    slug: 'maintainable-code-as-a-competitive-advantage',
    date: '2022-11-21',
  },
  {
    title: 'How to get around slow hotel wi-fi',
    description: 'Coming soon...',
    slug: 'fast-ethernet-slow-wifi',
    published: false,
  }
];

const Blog = () => {
  return (
    <Container>
      <H1>Posts</H1>
      <div className="flex flex-col space-y-6 py-4">
        {posts.map((post) => (
          <BlogPost {...post} key={post.slug}/>
        ))}
      </div>
    </Container>
  );
};

export default Blog;
