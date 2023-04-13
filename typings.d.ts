export type Category =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";

export type Article = {
  source: {};
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
export type Pagination = {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
};

export type NewsResponse = {
  articles: {
    source: {};
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }[];
};
