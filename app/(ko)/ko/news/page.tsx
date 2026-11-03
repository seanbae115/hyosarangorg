import type { Metadata } from "next";
import NewsBody from "@/components/pages/NewsBody";
import news from "@/lib/content/news";

export const metadata: Metadata = {
  title: news.ko.metaTitle,
  description: news.ko.metaDescription,
};

export default function Page() {
  return <NewsBody lang="ko" t={news.ko} />;
}
