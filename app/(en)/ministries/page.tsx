import type { Metadata } from "next";
import MinistriesBody from "@/components/pages/MinistriesBody";
import ministries from "@/lib/content/ministries";
import { pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: ministries.en.metaTitle,
  description: ministries.en.metaDescription,
  alternates: pageAlternates("/ministries", "en"),
};

export default function Page() {
  return <MinistriesBody lang="en" t={ministries.en} />;
}
