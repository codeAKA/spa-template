import React from "react";
import Paragraph from "../components/Paragraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapLocationDot,
  faMobileScreen,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { faClipboard as faRegularClipboard } from "@fortawesome/free-regular-svg-icons";

const ContactParagraphs: React.FC<{ paragraph: string; index: number }> = (
  props
) => {
  const { paragraph, index } = props;

  const ContactParagraph: React.FC<{
    paragraph: string;
    icon: any;
  }> = ({ paragraph, icon }) => {
    return (
      <div className="contact__paragraph__container">
        <span>
          <FontAwesomeIcon icon={icon} />
        </span>
        <span>
          <Paragraph key={paragraph} translation={paragraph} />
        </span>
      </div>
    );
  };
  switch (index) {
    case 0:
      return (
        <ContactParagraph paragraph={paragraph} icon={faRegularClipboard} />
      );
    case 1:
      return <ContactParagraph paragraph={paragraph} icon={faClipboard} />;
    case 2:
      return <ContactParagraph paragraph={paragraph} icon={faMapLocationDot} />;
    case 3:
      return <ContactParagraph paragraph={paragraph} icon={faEnvelope} />;
    default:
      return <></>;
  }
};
export default ContactParagraphs;
