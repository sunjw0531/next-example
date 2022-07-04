import Link from 'next/link';
import Head from 'next/head';

const PostsPage = () => {
  return (
    <div>
      <Head>
        <title>Posts</title>
        <meta property="og:title" content="Posts" />
        <meta property="og:description" content="실습 중" />
      </Head>
      <h1>This is posts page.</h1>
    </div>
  );
};

export default PostsPage;
