import {
  ClerkLoaded,
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  ClerkLoading
} from '@clerk/nextjs'
import type { AppProps } from 'next/app'
import ApolloProviderWrapper from 'pages/components/apollo-provider'
import Layout from 'pages/components/layout'

const privatePages = ['/user']

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <ClerkLoaded>
        <ApolloProviderWrapper>
          <Layout>
            {privatePages.includes(router.pathname) ? (
              <>
                <SignedIn>
                  <Component {...pageProps} />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            ) : (
              <Component {...pageProps} />
            )}
          </Layout>
        </ApolloProviderWrapper>
      </ClerkLoaded>
      <ClerkLoading>Loading</ClerkLoading>
    </ClerkProvider>
  )
}

export default MyApp
