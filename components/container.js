import Head from 'next/head';
import Header from '@/components/header';

const Container = ({ children }) => (
  <div className="flex flex-col items-center h-screen text-black dark:text-white bg-white dark:bg-black px-8">
    <Head>
      <title>Natan Weinberger</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="w-full max-w-2xl">
    <Header />
    <main>{children}</main>
    </div>
  </div>
);

export default Container;
