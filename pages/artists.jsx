import Head from 'next/head';
import React from 'react';
import { LargeList } from '../components/Artists';
import { ListLarge } from '../components/Artists/Lists';
import Content from '../components/Pages/Artists/Content';
import Header from '../components/Pages/Artists/Header';

const Arttists = () => {
  return (
    <>
      <Head>
        <title>Artists - Taradome Music</title>
      </Head>
      <Header />
      <LargeList />
      <Content />
    </>
  );
};

export default Arttists;
