import Link from 'next/link';

const links = {
  '/about': 'About',
  '/projects': 'Projects',
  '/blog': 'Blog',
  'https://github.com/natanweinberger': 'Source',
};

const Header = () => (
  <nav className="flex flex-col sm:flex-row items-start sm:items-center w-full px-8 sm:px-4 justify-between my-8 max-w-4xl">
    <div className="font-bold">
      <Link href="/" key="/">
        <a>Natan Weinberger</a>
      </Link>
    </div>
    <div className="flex flex-col sm:flex-row sm:space-x-4">
      {Object.keys(links).map((key) => (
        <Link href={key} key={key}>
          <a>{links[key]}</a>
        </Link>
      ))}
    </div>
  </nav>
);

export default Header;
