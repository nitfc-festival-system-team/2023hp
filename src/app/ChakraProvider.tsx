"use client";
import React from "react";
import { ChakraProvider as Base } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

import { globalTheme } from "@/styles/globalsTheme";

export default function ChakraProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider>
      <Base theme={globalTheme}>{children}</Base>
    </CacheProvider>
  );
}
