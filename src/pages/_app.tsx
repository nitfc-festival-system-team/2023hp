import "@/styles/globals.css";
import type { ReactElement, ReactNode } from "react";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import type { NextRouter } from "next/router";

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
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0 }} // 初期状態
          animate={{ opacity: 1 }} // マウント時
          exit={{ opacity: 0 }} // アンマウント時
          transition={{ ease: "easeOut", duration: 1 }}
        >
          {getLayout(<Component {...pageProps} />)}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
