import { Footer, Header } from '@components';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.scss';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
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
};

export default MyApp;
