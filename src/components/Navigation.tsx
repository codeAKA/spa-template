import React from "react";

interface NavigationLinkProps {
  translation: string;
  anchor: string;
  className?: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = (props) => {
  const { translation, className, anchor } = props;

  const scrollToAnchor = () => {
    const element = document.getElementById(anchor);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a className={className} onClick={scrollToAnchor}>
      {translation}
    </a>
  );
};

interface NavigationProps {
  id?: string;
  links?: { translation: string; anchor: string }[];
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = (props) => {
  const { id, links, className } = props;

  return (
    <nav className={className} id={id}>
      {links?.length &&
        links.map(({ translation, anchor }) => (
          <NavigationLink
            className="nav-link"
            translation={translation}
            anchor={anchor}
            key={anchor}
          />
        ))}
    </nav>
  );
};
