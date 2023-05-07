import React, { ReactNode, useRef } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export const Section: React.FC<SectionProps> = (props) => {
  const { id, children, className } = props;
  const ref = useRef(null);

  return (
    <section ref={id ? ref : null} className={className} id={id}>
      {children}
    </section>
  );
};
