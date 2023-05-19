import React from "react";

interface FooterItemProps {
  id?: string;
  title?: string;
  links: Array<{ isLink: boolean; text: string }>;
}

const FooterItem: React.FC<FooterItemProps> = (props) => {
  const { title, links, id } = props;

  const renderUrlOrText = (linkItem: { isLink: boolean; text: string }) => {
    if (linkItem.isLink) {
      return (
        <a id={id} href="#">
          {linkItem.text}
        </a>
      );
    }
    return <span id={id}>{linkItem.text}</span>;
  };

  if (links.length > 1) {
    return (
      <div id={id}>
        <h3>{title}</h3>
        <div>{links.map((link) => renderUrlOrText(link))}</div>
      </div>
    );
  }
  if (links.length === 1) {
    return <div id={id}>{renderUrlOrText(links[0])}</div>;
  }
  return <></>;
};

interface FooterProps {
  id?: string;
  className?: string;
  translations: FooterItemProps[];
}

const Footer: React.FC<FooterProps> = (props) => {
  const { id, className, translations } = props;

  return (
    <footer className={className} id={id}>
      {translations.length > 1 ? (
        translations.map((translation, index) => (
          <FooterItem key={(id || "") + index} {...translation} />
        ))
      ) : (
        <FooterItem {...translations[0]} />
      )}
    </footer>
  );
};

export default Footer;
