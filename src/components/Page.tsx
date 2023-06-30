import React, { ReactNode, useEffect } from "react";
import Spinner from "./Spinner";
import { PageError } from "../types/response.types";

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

  return isLoading ? <Spinner /> : <div className={className}>{children}</div>;
};

export default Page;
