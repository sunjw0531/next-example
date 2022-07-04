import Head from 'next/head';

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About page</title>
        <meta property="og:title" content="About" />
        <meta property="og:description" content="실습 중" />
      </Head>
      <h1>This is about page.</h1>
    </div>
  );
};

export default AboutPage;
