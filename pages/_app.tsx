import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Footer, Header } from '@components';
import '../styles/globals.scss';
import React, {useState, useEffect} from 'react'


const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {

  const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll )
  }, [])


  return (
    <>
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js"
          async
        ></script>
      </Head>
      <div className="wrapper">
        <Header />
        {scrollY}
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </div>
      <Footer />
    </>
  );
}
