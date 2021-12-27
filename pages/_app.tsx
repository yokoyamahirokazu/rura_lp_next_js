import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Footer, Header } from '@components';
import '../styles/globals.scss';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js'
          async
        ></script>
      </Head>
      <div className='wrapper'>
        <Header />
        <QueryClientProvider client={queryClient}>
          <div className='main'>
            <Component {...pageProps} />
          </div>
        </QueryClientProvider>
      </div>
      <Footer />
    </>
  );
}
