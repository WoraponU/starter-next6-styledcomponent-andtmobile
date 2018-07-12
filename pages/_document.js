import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="th">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `if ('addEventListener' in document) {
                document.addEventListener('DOMContentLoaded', function() {
                  FastClick.attach(document.body);
                }, false);
              }
              if(!window.Promise) {
                document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
              }`
            }}
          />
          <NextScript />
        </body>
      </html>
    )
  }
}
