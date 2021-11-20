import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from ".contentlayer/data";
import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

import Container from '@/components/container';
import { H1 } from '@/components/heading';

const ByLine = ({ publishDate }) => {
  // Create a datetime that will display using UTC timezone rather than local timezone
  // Otherwise, the call to `format` will display the UTC date in local timezone, which may be a day ahead or behind
  const utcPublishDate = utcToZonedTime(publishDate, null)
  return (
    <div className="flex w-full justify-between text-gray-700 text-sm">
      <span>Natan Weinberger / {format(utcPublishDate, 'MMMM d, yyyy')}</span>
    </div>
  );
};

const BlogPostHeader = ({title, publishDate}) => {
  return (
    <div className="prose mb-8">
      <H1>{title}</H1>
      <ByLine publishDate={publishDate} />
    </div>
  );
};

const Post = ({post}) => {
  return <Container>
    <BlogPostHeader title={post.title} publishDate={post.publishDate} />
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
