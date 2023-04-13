import NewsList from "@/app/NewsList";
import { categories } from "@/constants";
import fetchDefaultNews from "@/lib/fetchDefaultNews";
import { Category, NewsResponse } from "@/typings";
import React from "react";

type Props = {
  params: { category: Category };
};
async function NewsCategory({ params: { category } }: Props) {
  const news: NewsResponse = await fetchDefaultNews(category);

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
