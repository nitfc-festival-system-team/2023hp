"use client";
import { ReactElement } from "react";

import { NextPageWithLayout } from "@/pages/_app";
import { Stand } from "@/components/Stand";

export const Page: NextPageWithLayout = () => {
  return <Stand />;
};

Page.getLayout = (page: ReactElement) => {
  return <>{page}</>;
};

export default Page;
