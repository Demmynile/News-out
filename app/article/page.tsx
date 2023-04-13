import { Article } from "@/typings";
import { notFound } from "next/navigation";
import LiveTimestamp from "../LiveTimestamp";

type Props = {
  searchParams?: Article;
};
function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: Article = searchParams;

  return (
    <article>
      <section className="flex flex-col lg:flex-row lg:space-x-4 pb-24 px-0 lg:px-10">
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
          />
        )}

        <div>
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title}
          </h1>
          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">By {article.author || "unknown"}</h2>
            <p className="pl-4 ">
              {" "}
              <LiveTimestamp time={article.publishedAt} />
            </p>
          </div>
          <p className="pt-4">{article.description}</p>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
