import React from 'react';
// Modules
import { AppProps } from 'next/app';
import Head from 'next/head';

import 'tailwindcss/tailwind.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Website Dennis stassen</title>

        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/logoDennis.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;