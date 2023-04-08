import Head from "next/head";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/banner.css';
import '../styles/brand.css';
import '../styles/dashboard.css';

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>
          Ouro | Corporate Website
        </title>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}