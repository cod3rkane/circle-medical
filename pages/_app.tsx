import React from 'react'
import App, { AppInitialProps, AppContext } from 'next/app'

import { wrapper } from '@/store'
import '@/styles/globals.scss'

class MyApp extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    ctx.store.dispatch({ type: 'TOE', payload: 'was set in _app' })

    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        // Some custom thing for all pages
        pathname: ctx.pathname,
      },
    }
  }

  public render() {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}

export default wrapper.withRedux(MyApp)
