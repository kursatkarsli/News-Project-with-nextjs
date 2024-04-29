import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";
import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsSlug } from "@/app/lib/news";

export default async function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;
  // const newsItem = DUMMY_NEWS.find(
  //   (newsItem) => newsItem.slug === newsItemSlug
  // );
  const newsItem = await getNewsSlug(newsItemSlug)

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
