import type { Metadata } from "next";
import NewsBody from "@/components/pages/NewsBody";
import news from "@/lib/content/news";

export const metadata: Metadata = {
  title: news.en.metaTitle,
  description: news.en.metaDescription,
};

export default function Page() {
  return <NewsBody lang="en" t={news.en} />;
}
