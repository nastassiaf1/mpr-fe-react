import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument: React.FC = () => {
  return (
    <Html lang="en">
      <Head>
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;