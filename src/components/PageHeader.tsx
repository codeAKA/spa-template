import React, { ReactNode } from "react";

interface PageHeaderProps {
  id?: string;
  className?: string;
  children?: ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { id, children, className } = props;

  return (
    <header
      className={!className ? "PageHeader" : `PageHeader ${className}`}
      id={id}
    >
      {children}
    </header>
  );
};
