import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from ".contentlayer/data";

import Container from '@/components/container';
import { H1 } from '@/components/heading';

const ByLine = ({ date }) => {
  return (
    <div className="flex w-full justify-between text-gray-700 text-sm">
      <span>Natan Weinberger / {date}</span>
    </div>
  );
};

const BlogPostHeader = () => {
  return (
    <div className="prose mb-8">
      <H1>My First Post</H1>
      <ByLine date="June 13, 2021" />
    </div>
  );
};

const Post = ({post}) => {
  return <Container>
    <BlogPostHeader />
    <div className="prose" dangerouslySetInnerHTML={{ __html: post.body.html }} />
  </Container>
};

export async function getStaticPaths() {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  return { props: { post } };
}

export default Post;
