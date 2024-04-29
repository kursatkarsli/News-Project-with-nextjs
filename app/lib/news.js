import sql from "better-sqlite3";

const db = sql("data.db");
// From DB TO CLIENT STRUCTURE
export async function getAllNews() {
  const news = db.prepare("SELECT * FROM news").all();
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  return news;
}

export function getLatestNews() {
  const news = db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all();
  return news.slice(0, 3);
}

export async function getNewsSlug(slug) {
  const newsItem = db.prepare("SELECT * FROM news WHERE slug = ?").get(slug);
  await new Promise((resolve, reject) => setTimeout(resolve, 1500));
  return newsItem;
}
// DUMMY USAGE export function getAvailableNewsYears() {
//   const news = db
//     .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
//     .all();
//   return news
//     .reduce((years, news) => {
//       const year = new Date(news.date).getFullYear();
//       if (!years.includes(year)) {
//         years.push(year);
//       }
//       return years;
//     }, [])   
//     .sort((a, b) => b - a);
// }
export async function getAvailableNewsYears() {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    .map((year) => year.year);
 zzczx
  return years;
} 

// DUMMY DATA USAGE export function getAvailableNewsMonths(year) {
//   const news = db
//     .prepare(
//       "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
//     )
//     .all();
//   return news
//     .reduce((months, news) => {
//       const newsYear = new Date(news.date).getFullYear();
//       if (newsYear === +year) {
//         const month = new Date(news.date).getMonth();
//         if (!months.includes(month)) {
//           months.push(month + 1);
//         }
//       }
//       return months;
//     }, [])
//     .sort((a, b) => b - a);
// }
export function getAvailableNewsMonths(year) {
  return db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year)
    .map((month) => month.month);
}

// Dummy Usage export function getNewsForYear(year) {
//   const news = db
//     .prepare(
//       "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
//     )
//     .all(year);
//   return news.filter((news) => new Date(news.date).getFullYear() === +year);
// }
export async  function getNewsForYear(year) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year);
    await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}

// dummy usage export function getNewsForYearAndMonth(year, month) {
//   const news = db
//     .prepare(
//       "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
//     )
//     .all();
//   return news.filter((news) => {
//     const newsYear = new Date(news.date).getFullYear();
//     const newsMonth = new Date(news.date).getMonth() + 1;
//     return newsYear === +year && newsMonth === +month;
//   });
// }
export function getNewsForYearAndMonth(year, month) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month);

  return news;
}
