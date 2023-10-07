"use client";
import { ReactElement } from "react";

import { NextPageWithLayout } from "@/pages/_app";
import { Map } from "@/components/Map";

export const Page: NextPageWithLayout = () => {
  return <Map />;
};

Page.getLayout = (page: ReactElement) => {
  return <>{page}</>;
};

export default Page;
