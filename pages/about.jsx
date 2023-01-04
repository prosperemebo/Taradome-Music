import Head from 'next/head';
import Content from '../components/Pages/About/Content';
import Header from '../components/Pages/About/Header';
import Recognitions from '../components/Pages/About/Recognitions';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About US - Taradome Music</title>
      </Head>
      <Header />
      <Content />
      <Recognitions />
    </>
  );
};

export default AboutPage;
