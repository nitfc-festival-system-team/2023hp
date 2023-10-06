"use client";
import ChakraProvider from "./ChakraProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
