import type { Metadata } from "next";
import NewsBody from "@/components/pages/NewsBody";
import news from "@/lib/content/news";
import { pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: news.ko.metaTitle,
  description: news.ko.metaDescription,
  alternates: pageAlternates("/news", "ko"),
};

export default function Page() {
  return <NewsBody lang="ko" t={news.ko} />;
}
