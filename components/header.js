import Link from 'next/link';

const links = {
  // '/projects': 'Projects',
  '/blog': 'Blog',
  'https://github.com/natanweinberger': 'Source',
};

const Header = () => (
  <nav className="flex flex-col sm:flex-row sm:space-x-8 items-start sm:items-center w-full my-8">
      <Link href="/" key="/">
        <a className="font-bold">Home</a>
      </Link>
      {Object.keys(links).map((key) => (
        <Link href={key} key={key}>
          <a>{links[key]}</a>
        </Link>
      ))}
  </nav>
);

export default Header;
