import type { Metadata } from "next";
import NewsBody from "@/components/pages/NewsBody";
import news from "@/lib/content/news";
import { pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: news.en.metaTitle,
  description: news.en.metaDescription,
  alternates: pageAlternates("/news", "en"),
};

export default function Page() {
  return <NewsBody lang="en" t={news.en} />;
}
