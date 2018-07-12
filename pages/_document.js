import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
          />
          {/* <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js" /> */}
          {/* <script>
            if ('addEventListener' in document) {
              document.addEventListener('DOMContentLoaded', function() {
                FastClick.attach(document.body);
              }, false);
            }
            if(!window.Promise) {
              document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
            }
          </script> */}
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
