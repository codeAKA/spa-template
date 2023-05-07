import React from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { PageHeader } from "./components/PageHeader";
import Page from "./page/Page";
import { Section } from "./components/Section";
import { Paragraph } from "./components/Paragraph";
import Footer from "./components/Footer";
import translations from "./page/translations.json";

function App(): JSX.Element {
  const { navigationLinks, sections, footerColumns } =
    translations.lang.pl.page;

  return (
    <div className="App">
      <Page>
        <Navigation links={navigationLinks} />
        <PageHeader id="header">Visual Solutions</PageHeader>
        {sections.map(
          ({
            id,
            title,
            paragraphs,
          }: {
            id: string;
            title: string;
            paragraphs: string[];
          }) => (
            <Section id={id}>
              <h2>{title}</h2>
              {paragraphs.map((paragraph) => (
                <Paragraph key={paragraph} translation={paragraph} />
              ))}
            </Section>
          )
        )}
        <Footer id="footer" translations={footerColumns} />
      </Page>
    </div>
  );
}

export default App;
