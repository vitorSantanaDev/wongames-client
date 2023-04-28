import Head from 'next/head'
import { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import { useApollo } from 'utils/apollo'

import { CartProvider } from 'hooks/use-cart'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import { WishListProvider } from 'hooks/use-wishlist'
import { Provider as AuthProvider } from 'next-auth/client'

import GlobalStyles from 'styles/global'

import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <WishListProvider>
              <Head>
                <title>Won Games</title>
                <link rel="shortcut icon" href="/img/icon-512.png" />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#06092B" />
                <meta
                  name="description"
                  content="The best Game Store in the world!"
                />
              </Head>
              <DefaultSeo {...SEO} />
              <GlobalStyles />
              <NextNProgress
                height={5}
                color="#F231A5"
                stopDelayMs={200}
                startPosition={0.3}
              />
              <Component {...pageProps} />
            </WishListProvider>
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default App
