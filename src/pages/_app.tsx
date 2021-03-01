import React from 'react';
import App from 'next/app';
import { ThemeProvider, CSSReset, theme } from '@chakra-ui/react';
import { wrapper } from '../store/store';

export class MapApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }
    
    render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider theme={theme}>
            <CSSReset />
            <Component {...pageProps} />
            </ThemeProvider>
        );
    }
}

export default wrapper.withRedux(MapApp);
