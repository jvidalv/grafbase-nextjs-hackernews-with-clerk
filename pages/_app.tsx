import "/styles/globals.css";
import {
  ClerkLoaded,
  ClerkProvider,
  SignedIn,
  SignedOut,
  ClerkLoading,
} from "@clerk/nextjs";
import ApolloProviderWrapper from "components/apollo-provider";
import Head from "components/head";
import Layout from "components/layout";
import LogoAnimated from "components/logo-animated";
import Redirect from "components/redirect";
import type { AppProps } from "next/app";

const privatePages = ["/user/[id]"];

const placeholder = (
  <div className="flex items-center justify-center min-h-screen">
    <div className="border border-black pt-6 pb-4 px-6 bg-gray-50 border-b-4 -mt-16">
      <LogoAnimated />
    </div>
  </div>
);

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Head />
      <ClerkLoaded>
        <ApolloProviderWrapper>
          <Layout>
            {privatePages.includes(router.pathname) ? (
              <>
                <SignedIn>
                  <Component {...pageProps} />
                </SignedIn>
                <SignedOut>
                  <Redirect> {placeholder}</Redirect>
                </SignedOut>
              </>
            ) : (
              <Component {...pageProps} />
            )}
          </Layout>
        </ApolloProviderWrapper>
      </ClerkLoaded>
      <ClerkLoading>{placeholder}</ClerkLoading>
    </ClerkProvider>
  );
}

export default MyApp;
