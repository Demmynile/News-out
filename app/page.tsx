import { categories } from "@/constants";
import { NewsResponse } from "@/typings";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";

async function page() {
  const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default page;
