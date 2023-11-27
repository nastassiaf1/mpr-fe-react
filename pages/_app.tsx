import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Header from '../components/header';
import Footer from '../components/footer';
import store from '@/redux/store';

import './../styles/globals.scss';
import styles from '../styles/pages/index.module.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <div className={ styles['page-container'] }>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  )
};

export default MyApp;