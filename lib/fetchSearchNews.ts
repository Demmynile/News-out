import { Category, NewsResponse } from "@/typings";

const fetchSearchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  console.log(keywords);

  //fetch function with Nextjs 13 with caching

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${keywords}&apiKey=${process.env.MEDIASTACK_API_KEY}`,
    {
      method: "GET",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
    }
  );

  const newsResponse: NewsResponse = await res.json();

  return newsResponse;
};

export default fetchSearchNews;
