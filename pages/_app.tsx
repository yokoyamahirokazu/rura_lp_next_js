import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Footer, Header } from '@components';
import '../styles/globals.scss';
import { config } from '@site.config';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js'
          async></script>
      </Head>
      <Script
        id='gtag-base'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${config.gtmId}');`,
        }}
      />
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
