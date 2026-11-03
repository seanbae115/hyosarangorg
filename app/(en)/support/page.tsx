import type { Metadata } from "next";
import SupportBody from "@/components/pages/SupportBody";
import support from "@/lib/content/support";
import { pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: support.en.metaTitle,
  description: support.en.metaDescription,
  alternates: pageAlternates("/support", "en"),
};

export default function Page() {
  return <SupportBody lang="en" t={support.en} />;
}
