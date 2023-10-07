"use client";
import { ReactElement } from "react";

import { NextPageWithLayout } from "@/pages/_app";
import { Schedule } from "@/components/Schedule";

export const Page: NextPageWithLayout = () => {
  return <Schedule />;
};

Page.getLayout = (page: ReactElement) => {
  return <>{page}</>;
};

export default Page;
