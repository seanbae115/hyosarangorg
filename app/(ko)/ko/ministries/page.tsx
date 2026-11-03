import type { Metadata } from "next";
import MinistriesBody from "@/components/pages/MinistriesBody";
import ministries from "@/lib/content/ministries";
import { pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: ministries.ko.metaTitle,
  description: ministries.ko.metaDescription,
  alternates: pageAlternates("/ministries", "ko"),
};

export default function Page() {
  return <MinistriesBody lang="ko" t={ministries.ko} />;
}
