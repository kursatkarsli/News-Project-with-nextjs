import Link from "next/link";

export const NewsList = ({news}) => {
  return (
    <ul className="news-list">
      {news.map((news) => (
        <li key={news.id}>
          <Link href={`/news/${news.slug}`}>
            <img
              src={`/images/news/${news.image}`}
              alt={news.id}
              className=""
            />
          </Link>
          <h3 className="">{news.title}</h3>
        </li>
      ))}
    </ul>
  );
};
