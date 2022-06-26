import React, {Fragment} from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

// Components
import Header from '../components/header';

// Styles
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Aphor</title>
        <meta name="description" content="" />
        <meta property="og:title" content="Aphor" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://pablu.xyz/" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  );
}
export default MyApp;
