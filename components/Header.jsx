import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a>home</a>
      </Link>{' '}
      <Link href="/about">about</Link> <Link href="/posts">posts</Link>
    </div>
  );
};

export default Header;
