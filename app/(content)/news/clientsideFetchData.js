"use client";
import { NewsList } from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [news, setNews] = useState([]);
  useEffect(() => {
    FetchingAllData: (async function fetchNews() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");
      if (!response) {
        setError("Failed To fetch news");
        setIsLoading(false);
      }
      const news = await response.json();
      setIsLoading(false);
      setNews(news);
    })();
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />{" "}
    </>
  );
}
