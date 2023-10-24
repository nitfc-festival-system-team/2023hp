"use client";
import { ReactElement } from "react";

import { Schedule } from "@/components/Schedule";
import { NextPageWithLayout } from "@/pages/_app";

export const Page: NextPageWithLayout = () => {
  return <Schedule />;
};

Page.getLayout = (page: ReactElement) => {
  return <>{page}</>;
};

export default Page;
