import React, { ReactNode } from "react";

interface ColumnsProps {
  children: ReactNode;
  className?: string;
  columnsNumber?: number;
}

const Columns: React.FC<ColumnsProps> = (props) => {
  const { children, className, columnsNumber } = props;
  return <div className={className}>{children}</div>;
};

export default Columns;
