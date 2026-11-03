import type { Metadata } from "next";
import SupportBody from "@/components/pages/SupportBody";
import support from "@/lib/content/support";

export const metadata: Metadata = {
  title: support.ko.metaTitle,
  description: support.ko.metaDescription,
};

export default function Page() {
  return <SupportBody lang="ko" t={support.ko} />;
}
