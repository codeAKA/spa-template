import React, { useState } from "react";
import "./Navigation.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface NavigationLinkProps {
  translation: string;
  anchor: string;
  className?: string;
  setIsNavExpanded: (value: boolean) => void;

  onClick?: () => void;
}

const NavigationLink: React.FC<NavigationLinkProps> = (props) => {
  const { translation, className, anchor, setIsNavExpanded } = props;

  return (
    <Link
      className={className}
      to={anchor}
      onClick={() => setIsNavExpanded(false)}
    >
      {translation}
    </Link>
  );
};

interface NavigationProps {
  id?: string;
  links?: { translation: string; anchor: string }[];
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = (props) => {
  const { id, links, className } = props;
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav
      className={!className ? "Navigation" : `Navigation ${className}`}
      id={id}
    >
      <Button
        className="Navigation-toggle"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <FontAwesomeIcon icon={isNavExpanded ? faXmark : faBars} />
      </Button>
      <ul className={!isNavExpanded ? "nav-list" : "nav-list expanded"}>
        {links?.length &&
          links.map(({ translation, anchor }) => (
            <li className="nav-list-item" key={anchor}>
              <NavigationLink
                className="nav-link"
                translation={translation}
                anchor={anchor}
                setIsNavExpanded={setIsNavExpanded}
              />
            </li>
          ))}
      </ul>
    </nav>
  );
};
