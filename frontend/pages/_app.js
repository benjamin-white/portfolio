import App from 'next/app'
import Head from 'next/head'
import { createContext } from 'react'
import { getStrapiMedia } from 'lib/media'
import { fetchAPI } from 'lib/api'
import 'styles/normalize-light.css'
import 'styles/colors.css'
import 'styles/typography.css'
import 'styles/layout.css'
import 'styles/elements.css'

export const GlobalContext = createContext({})

const PageWrap = ({ Component, pageProps }) => {

  const { global } = pageProps;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Staatliches" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap" />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );

}

PageWrap.getInitialProps = async (ctx) => {

  const appProps = await App.getInitialProps(ctx)
  const global   = await fetchAPI('/global')
  global.route   = ctx.router.pathname

  return { ...appProps, pageProps: { global } }

}

export default PageWrap