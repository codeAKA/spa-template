import React from "react";
import { Navigation } from "../components/Navigation";
import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import Footer from "../components/Footer";
import translations from "../page/translations.json";
import ScrollButton from "../components/ScrollButton";
import Page from "../components/Page";
import ContactParagraphs from "./ContactParagraphs";
import Paragraph from "../components/Paragraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./VisSolPage.css";

const VisSolPage: React.FC = () => {
  const { navigationLinks, sections, footerColumns } =
    translations.lang.pl.page;

  return (
    <Page>
      <Navigation links={navigationLinks} />
      <PageHeader id="header">Visual Solutions</PageHeader>
      <Section id={sections[0].id} className="Section">
        <h2>{sections[0].title}</h2>
        {sections[0].paragraphs.map((paragraph) => (
          <Paragraph key={paragraph} translation={paragraph} />
        ))}
      </Section>
      <Section id={sections[1].id} className="Section">
        <h2>{sections[1].title}</h2>
        {sections[1].paragraphs.map((paragraph, index) => (
          <ContactParagraphs
            key={paragraph}
            paragraph={paragraph}
            index={index}
          />
        ))}
      </Section>
      {/* {sections.map(
        ({
          id,
          title,
          paragraphs,
        }: {
          id: string;
          title: string;
          paragraphs: string[];
        }) => (
          <Section id={id} className="Section">
            <h2>{title}</h2>
            {paragraphs.map((paragraph, index) =>
              id === "contact" ? (
                <ContactParagraphs
                  key={paragraph}
                  paragraph={paragraph}
                  index={index}
                />
              ) : (
                <Paragraph key={paragraph} translation={paragraph} />
              )
            )}
          </Section>
        )
      )} */}
      <ScrollButton className="ScrollButton">
        <div className="ScrollButton__content">
          <FontAwesomeIcon icon={faCircleChevronUp} />
          <span>Powrót</span>
        </div>
      </ScrollButton>
      <Footer id="footer" translations={footerColumns} />
    </Page>
  );
};

export default VisSolPage;
