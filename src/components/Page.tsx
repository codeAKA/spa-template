import React, { ReactNode, useEffect } from "react";
import { PageError } from "../types/response.types";
import BouncingLoader from "./BouncingLoader";

interface PageProps {
  loading: boolean;
  error: PageError | null;
  children: ReactNode;
  className?: string;
}

const Page: React.FC<PageProps> = ({ loading, error, children, className }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);
  if (error) {
    return <h1>{`Error code: ${error.data.status}. ${error.message}`}</h1>;
  }

  return isLoading ? (
    <BouncingLoader />
  ) : (
    <div className={className}>{children}</div>
  );
};

export default Page;
