"use client";
import { ReactElement } from "react";

import { Map } from "@/components/Map";
import { NextPageWithLayout } from "@/pages/_app";

export const Page: NextPageWithLayout = () => {
  return <Map />;
};

Page.getLayout = (page: ReactElement) => {
  return <>{page}</>;
};

export default Page;
