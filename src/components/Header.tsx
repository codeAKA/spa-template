import React from "react";

enum HEADER_SIZES {
  SMALL = "h3",
  MEDIUM = "h2",
  LARGE = "h1",
}

interface HeaderProps {
  id?: string;
  className?: string;
  translation: string;
  size: keyof typeof HEADER_SIZES;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { id, translation, size, className } = props;
  const headerSize = HEADER_SIZES[size];

  switch (headerSize) {
    case "h1":
      return (
        <h1 className={className} id={id}>
          {translation}
        </h1>
      );
    case "h2":
      return (
        <h2 className={className} id={id}>
          {translation}
        </h2>
      );
    case "h3":
      return (
        <h3 className={className} id={id}>
          {translation}
        </h3>
      );
    default:
      return (
        <h1 className={className} id={id}>
          {translation}
        </h1>
      );
  }
};
