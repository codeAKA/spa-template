import { PageContent, TranslationContent } from "../types/translations.types";
import { PageApiResponse } from "../types/response.types";

const pageContentMapper = (
  translationsObject: TranslationContent,
  apiResponse: PageApiResponse[],
  language = "pl"
): PageContent => {
  const pageContentMapper = (el: string) =>
    el
      .split("</p>")
      .map((paragraph) => paragraph.replace(/<\/?[^>]+(>|$)/g, ""));

  const response = apiResponse.reverse();

  const mappedTranslations: PageContent = {
    ...translationsObject[language].page,
    navigationLinks: translationsObject[language].page.navigationLinks.map(
      (link, index) => ({
        translation: response[index].title.rendered,
        anchor: response[index].slug,
      })
    ),
    sections: translationsObject[language].page.sections.map((el, index) => ({
      id: response[index].slug,
      title: response[index].title.rendered,
      paragraphs: pageContentMapper(response[index].content.rendered),
    })),
  };

  return mappedTranslations;
};

export default pageContentMapper;
