import type { Metadata } from "next";
import SupportBody from "@/components/pages/SupportBody";
import support from "@/lib/content/support";

export const metadata: Metadata = {
  title: support.en.metaTitle,
  description: support.en.metaDescription,
};

export default function Page() {
  return <SupportBody lang="en" t={support.en} />;
}
