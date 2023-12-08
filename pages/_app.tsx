import { ThemeProvider } from '@react95/core';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import type { AppProps } from 'next/app';
import '../src/styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={'millenium'}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
