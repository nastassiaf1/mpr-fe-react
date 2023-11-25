import { Inter } from 'next/font/google';
import './../styles/globals.scss';
import Header from '../components/header';
import Footer from '../components/footer';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout ({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
