import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties | undefined;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  style,
}) => {
  return (
    <button
      className={!className ? "Button" : `Button ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
