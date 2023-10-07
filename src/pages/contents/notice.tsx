"use client";
import { ReactElement } from "react";

import { NextPageWithLayout } from "@/pages/_app";
import { Notice } from "@/components/Notice";

export const Page: NextPageWithLayout = () => {
  return <Notice />;
};

Page.getLayout = (page: ReactElement) => {
  return <>{page}</>;
};

export default Page;
