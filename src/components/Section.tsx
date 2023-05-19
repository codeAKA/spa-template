import React, { MutableRefObject, ReactNode, useRef } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export const Section: React.FC<SectionProps> = (props) => {
  const { id, children, className } = props;

  return (
    <section className={className} id={id}>
      {children}
    </section>
  );
};
