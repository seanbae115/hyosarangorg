import type { Metadata } from "next";
import HistoryBody from "@/components/pages/HistoryBody";
import history from "@/lib/content/history";

export const metadata: Metadata = {
  title: history.en.metaTitle,
  description: history.en.metaDescription,
};

export default function Page() {
  return <HistoryBody lang="en" t={history.en} />;
}
