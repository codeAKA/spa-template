import React, { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return <>{children}</>;
};

export default Page;
