"use client";
import { ReactElement } from "react";

import { Stand } from "@/components/Stand";
import { NextPageWithLayout } from "@/pages/_app";

export const Page: NextPageWithLayout = () => {
  return <Stand />;
};

Page.getLayout = (page: ReactElement) => {
  return <>{page}</>;
};

export default Page;
