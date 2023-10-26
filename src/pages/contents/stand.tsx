"use client";
import { ReactElement } from "react";

import { Footer } from "@/components/Footer";
import { Stand } from "@/components/Stand";
import { NextPageWithLayout } from "@/pages/_app";

export const Page: NextPageWithLayout = () => {
  return (
    <>
      <Stand />
      <Footer />
    </>
  );
};

Page.getLayout = (page: ReactElement) => {
  return <>{page}</>;
};

export default Page;
