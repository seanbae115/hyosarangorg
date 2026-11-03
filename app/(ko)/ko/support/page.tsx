import type { Metadata } from "next";
import SupportBody from "@/components/pages/SupportBody";
import support from "@/lib/content/support";
import { pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: support.ko.metaTitle,
  description: support.ko.metaDescription,
  alternates: pageAlternates("/support", "ko"),
};

export default function Page() {
  return <SupportBody lang="ko" t={support.ko} />;
}
