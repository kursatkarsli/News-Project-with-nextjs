import { getAllNews } from "@/app/lib/news";
import { NewsList } from "@/components/news-list";

export default async function NewsPage() {
  //   const response = await fetch("http://localhost:8080/news");
  //   const news = await response.json();

  //   if (!response.ok) {
  //     throw new Error('Response failed');
  //   }
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />{" "}
    </>
  );
}
