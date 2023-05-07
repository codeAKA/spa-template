import React from "react";

interface ParagraphProps {
  id?: string;
  translation: string;
  className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = (props) => {
  const { id, translation, className } = props;
  return (
    <p className={className} id={id}>
      {translation}
    </p>
  );
};
