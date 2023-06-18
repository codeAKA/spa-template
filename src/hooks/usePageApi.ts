import { PageApiResponse, PageResult } from "../types/response.types";

const usePageApi = () => {
  const buildUrl = (domainUrl?: string, parts: string[] = []) =>
    `${domainUrl}` && `${domainUrl}${parts.join("/")}`;
  let response: PageResult = [];

  const fetchPage = async () => {
    const pageUrlParts = process.env.REACT_APP_PAGES_REST_API_URL
      ? [process.env.REACT_APP_PAGES_REST_API_URL]
      : [];

    const url = buildUrl(process.env.REACT_APP_BASE_REST_API_URL, pageUrlParts);

    await fetch(`${url}`)
      .then(
        async (res): Promise<PageApiResponse[]> => (response = await res.json())
      )
      .catch((err) => (response = err));

    return response;
  };
  return { fetchPage };
};

export default usePageApi;
