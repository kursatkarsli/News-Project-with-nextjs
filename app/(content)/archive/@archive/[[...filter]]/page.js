import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/app/lib/news";
import { NewsList } from "@/components/news-list";
import Link from "next/link";
import React, { Suspense } from "react";

async function FilterHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Invalid filter.");
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
async function FilteredNews({ year, month }) {
  let news;
  if (year && !month) news = await getNewsForYear(year);
  else if (year && month) news = getNewsForYearAndMonth(year, month);
  let newsContent = <p>No news found for these year and month</p>;
  if (news && news?.length) {
    newsContent = <NewsList news={news} />;
  }
  return newsContent;
}

function FilteredNewsPage({ params }) {
  const filter = params.filter; // this is catch all route so it return array of params
  // const news = getNewsForYear(newsYear);
  let links = getAvailableNewsYears();
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  if (selectedYear && !selectedMonth) {
    links = getAvailableNewsMonths(selectedYear);
  }
  if (selectedMonth && selectedYear) {
    links = [];
  }

  if (
    (selectedYear &&
      !getAvailableNewsYears(selectedYear).includes(selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
  ) {
    throw new Error("Invalid Filter");
  }
  return (
    <>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}

export default FilteredNewsPage;
