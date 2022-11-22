import Link from 'next/link';

const links = {
  // '/projects': 'Projects',
  '/blog': 'Blog',
  'https://github.com/natanweinberger': 'Source',
};

const Header = () => (
  <nav className="flex space-x-8 items-start sm:items-center w-full my-8 text-xl sm:text-base">
      <Link href="/" key="/" className="">
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
