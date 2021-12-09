import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Footer, Header } from '@components';
import '../styles/globals.scss';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey="6LeonngdAAAAAFhZcAqOlCzr-G5gXGEVUPpWjQIo"
        language="ja"
      >
        <Head>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js"
            async
          ></script>
          <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        </Head>
        <div className="wrapper">
          <Header />
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </div>
        <Footer />
      </GoogleReCaptchaProvider>
    </>
  );
}
