export interface PageApiResponse {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
}

export interface PageError {
  code: string;
  message: string;
  data: {
    status: number;
  };
}

export type PageResult = PageApiResponse[] | PageError;
