import React, { useEffect, useState } from "react";
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
import {
  faCircleChevronDown,
  faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import "./VisSolPage.css";
import { Header } from "../components/Header";
import Button from "../components/Button";
import usePageApi from "../hooks/usePageApi";
import pageContentMapper from "../helpers/pageContentMapper";
import {
  FooterColumns,
  NavigationLinks,
  SectionContent,
} from "../types/translations.types";
import { PageError } from "../types/response.types";

const VisSolPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<PageError | null>(null);
  const [sections, setSections] = useState<SectionContent[]>([]);
  const [navigationLinks, setNavigationLinks] = useState<NavigationLinks[]>([]);
  const [footerColumns, setFooterColumns] = useState<FooterColumns[]>([]);
  const [targetSection, setTargetSection] = useState<HTMLElement | null>(null);
  const { fetchPage } = usePageApi();

  useEffect(() => {
    const fetchPageFromApi = async () => {
      const pageData = await fetchPage();
      if (pageData && pageData instanceof Array && pageData.length > 0) {
        setLoading(false);
        setError(null);
        const {
          navigationLinks: pageNavigation,
          sections: pageSections,
          footerColumns: pageFooterColumn,
        } = pageContentMapper(translations, pageData);

        if (pageNavigation && pageNavigation.length > 0) {
          setNavigationLinks(pageNavigation);
        }
        if (pageFooterColumn && pageFooterColumn.length > 0) {
          setFooterColumns(pageFooterColumn);
        }
        if (pageSections && pageSections.length > 0) {
          setSections(pageSections);
        }
      } else if (pageData && "message" in pageData) {
        setLoading(false);
        setError(pageData);
      }
    };

    fetchPageFromApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (sections && sections.length > 0) {
      const target = document.getElementById(sections[0].id);
      setTargetSection(target);
    }
  }, [sections]);

  return (
    <Page loading={loading} error={error}>
      {navigationLinks && navigationLinks.length > 0 && (
        <Navigation links={navigationLinks} />
      )}
      <PageHeader id="header">
        <Header
          size="LARGE"
          className="PageHeader__title"
          translation="Visual Solutions"
        />
        <Button
          onClick={() =>
            targetSection &&
            targetSection.scrollIntoView({ behavior: "smooth" })
          }
          className="PageHeader__button"
        >
          <FontAwesomeIcon
            className="PageHeader__button__icon"
            icon={faCircleChevronDown}
          />
        </Button>
      </PageHeader>
      {sections && sections.length > 0 && (
        <>
          <Section id={sections[0].id} className="Section Section--about">
            <h2>{sections[0].title}</h2>
            {sections[0].paragraphs.map((paragraph) => (
              <Paragraph key={paragraph} translation={paragraph} />
            ))}
          </Section>
          <Section id={sections[1].id} className="Section Section--contact">
            <h2>{sections[1].title}</h2>
            {sections[1].paragraphs.map((paragraph, index) => (
              <ContactParagraphs
                key={paragraph}
                paragraph={paragraph}
                index={index}
              />
            ))}
          </Section>
        </>
      )}

      <ScrollButton className="ScrollButton">
        <div className="ScrollButton__content">
          <FontAwesomeIcon icon={faCircleChevronUp} />
          <span>Powrót</span>
        </div>
      </ScrollButton>
      {footerColumns && footerColumns.length > 0 && (
        <Footer id="footer" className="Footer" translations={footerColumns} />
      )}
    </Page>
  );
};

export default VisSolPage;
