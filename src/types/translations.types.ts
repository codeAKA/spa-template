export interface NavigationLinks {
  translation: string;
  anchor: string;
}

export interface SectionContent {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface FooterLink {
  isLink: boolean;
  text: string;
}

export interface FooterColumns {
  title: string;
  links: FooterLink[];
}

export interface PageContent {
  name: string;
  navigationLinks: NavigationLinks[];
  sections: SectionContent[];
  footerColumns: FooterColumns[];
}

export interface ApiError {
  type: string;
  message: string;
}

export interface TranslationContent {
  [lang: string]: { page: PageContent };
}
