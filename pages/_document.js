import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add AR.js CDN link */}
          <script src="https://cdn.jsdelivr.net/gh/jeromeetienne/AR.js@2.4.0/aframe/build/aframe-ar.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
