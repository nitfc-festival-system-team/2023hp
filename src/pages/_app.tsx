import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import type { NextRouter } from "next/router";
import type { ReactElement, ReactNode } from "react";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

// 1. Import the extendTheme function

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  router: NextRouter;
};

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>nitfc2023fes</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=yes"
        ></meta>
      </Head>
      <AnimatePresence mode="wait">
        {getLayout(<Component key={router.asPath} {...pageProps} />)}
      </AnimatePresence>
    </>
  );
}

export default MyApp;
