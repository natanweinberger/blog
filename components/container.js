import Head from 'next/head';
import Header from '@/components/header';

const Container = ({ children }) => (
  <div className="flex flex-col items-center min-h-screen h-full text-gray-700 px-8">
    <Head>
      <title>Natan Weinberger</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="w-full grow flex flex-col max-w-2xl">
      <Header />
      <main className="grow">{children}</main>
    </div>
  </div>
);

export default Container;
