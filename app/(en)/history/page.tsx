import type { Metadata } from "next";
import HistoryBody from "@/components/pages/HistoryBody";
import history from "@/lib/content/history";
import { pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: history.en.metaTitle,
  description: history.en.metaDescription,
  alternates: pageAlternates("/history", "en"),
};

export default function Page() {
  return <HistoryBody lang="en" t={history.en} />;
}
