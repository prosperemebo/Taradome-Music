import Head from 'next/head';
import Home from '../components/Pages/Home';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Taradome Music</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Home />
    </>
  );
}
