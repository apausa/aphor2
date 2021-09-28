/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import React from 'react';
import Head from 'next/head';
import Header from '../components/header';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>Aphor</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Description" />
        <meta property="og:title" content="Aphor" />
        <meta property="og:description" content="Description" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
