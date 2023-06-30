import React, { ReactNode } from "react";

export interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = (props) => {
  const { id, children, className } = props;

  return (
    <section className={className} id={id}>
      {children}
    </section>
  );
};

export default Section;
