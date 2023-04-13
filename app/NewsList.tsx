import { NewsResponse } from "@/typings";
import { notFound } from "next/navigation";
import React from "react";
import Article from "./Article";

type Props = {
  news: NewsResponse;
};

notFound;
function NewsList({ news }: Props) {
  console.log(news);
  return (
    <main className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 p-10 gap-10">
      {news
        ? news.articles
            .filter((sort) => sort.urlToImage !== null)
            .map((article) => <Article key={article.title} article={article} />)
        : notFound()}
    </main>
  );
}

export default NewsList;
