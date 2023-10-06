"use client";

import React from "react";
import { ChakraProvider as Base } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

import "@/styles/globals.css";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

export const theme = extendTheme({ colors });

export default function ChakraProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider>
      <Base theme={theme}>{children}</Base>
    </CacheProvider>
  );
}
