import type { Metadata } from "next";
import HistoryBody from "@/components/pages/HistoryBody";
import history from "@/lib/content/history";
import { pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: history.ko.metaTitle,
  description: history.ko.metaDescription,
  alternates: pageAlternates("/history", "ko"),
};

export default function Page() {
  return <HistoryBody lang="ko" t={history.ko} />;
}
