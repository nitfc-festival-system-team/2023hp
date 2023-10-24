"use client";
import { ReactElement } from "react";

import { Notice } from "@/components/Notice";
import { NextPageWithLayout } from "@/pages/_app";

export const Page: NextPageWithLayout = () => {
  return <Notice />;
};

Page.getLayout = (page: ReactElement) => {
  return <>{page}</>;
};

export default Page;
