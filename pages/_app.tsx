import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import GlobalStyle from '../styles/global';
import { createWrapper } from 'next-redux-wrapper';
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Provider store={store}>
            <NextNprogress color="#FF0000" startPosition={0.3} stopDelayMs={200} height={3} />
            <GlobalStyle />
            <Component {...pageProps} />
        </Provider>
    );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
