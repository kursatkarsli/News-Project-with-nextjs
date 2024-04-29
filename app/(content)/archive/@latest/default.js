import { getLatestNews } from "@/app/lib/news"
import { NewsList } from "@/components/news-list"

export default function LatestArchivePage() {
  const latestNews = getLatestNews()
  return <>
  <h2 className="">Latest News</h2>
  <NewsList news={latestNews} />
  
  </>
}
