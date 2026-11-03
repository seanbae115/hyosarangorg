import type { Metadata } from "next";
import HistoryBody from "@/components/pages/HistoryBody";
import history from "@/lib/content/history";

export const metadata: Metadata = {
  title: history.ko.metaTitle,
  description: history.ko.metaDescription,
};

export default function Page() {
  return <HistoryBody lang="ko" t={history.ko} />;
}
