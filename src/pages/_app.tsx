import theme from '../styles/theme';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/global';
import { queryClient } from '@/lib/react-query';
import { persistor, store } from '@/redux/store';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClientProvider } from '@tanstack/react-query';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <GlobalStyles />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  )
}
