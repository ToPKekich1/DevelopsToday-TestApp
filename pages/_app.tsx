import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import NextNProgress from 'nextjs-progressbar';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <NextNProgress color="#FF0000" startPosition={0.3} stopDelayMs={200} height={3} />
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
