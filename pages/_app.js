import App, { Container } from 'next/app'
import React from 'react'
import { injectGlobal } from 'styled-components'

import '../styles/antdMobile.less'

injectGlobal`
  @font-face {
    font-family: Kanit-Light;
    src: url('/static/fonts/Kanit/Kanit-Light.eot');
    src: url('/static/fonts/Kanit/Kanit-Light.eot?') format('embedded-opentype'),
          url('/static/fonts/Kanit/Kanit-Light.woff') format('woff'),
          url('/static/fonts/Kanit/Kanit-Light.ttf') format('truetype');
  }
  @font-face {
    font-family: Kanit-Regular;
    src: url('/static/fonts/Kanit/Kanit-Regular.eot');
    src: url('/static/fonts/Kanit/Kanit-Regular.eot?') format('embedded-opentype'),
          url('/static/fonts/Kanit/Kanit-Regular.woff') format('woff'),
          url('/static/fonts/Kanit/Kanit-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: Kanit-Medium;
    src: url('/static/fonts/Kanit/Kanit-Medium.eot');
    src: url('/static/fonts/Kanit/Kanit-Medium.eot?') format('embedded-opentype'),
          url('/static/fonts/Kanit/Kanit-Medium.woff') format('woff'),
          url('/static/fonts/Kanit/Kanit-Medium.ttf') format('truetype');
  }

  html {
    font-family: Kanit-Light;
    font-size: 12px
  }
`

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
