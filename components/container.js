import Head from 'next/head';
import Header from '@/components/header';

const Container = ({ children }) => (
  <div className="flex flex-col items-center h-screen text-black dark:text-white bg-white dark:bg-black">
    <Head>
      <title>Natan Weinberger</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className="w-full max-w-xs sm:max-w-xl lg:max-w-3xl">{children}</main>
  </div>
);

export default Container;
