import theme from '../styles/theme';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/global';
import { persistor, store } from '@/redux/store';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}
