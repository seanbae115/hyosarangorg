import type { Metadata } from "next";
import MinistriesBody from "@/components/pages/MinistriesBody";
import ministries from "@/lib/content/ministries";

export const metadata: Metadata = {
  title: ministries.ko.metaTitle,
  description: ministries.ko.metaDescription,
};

export default function Page() {
  return <MinistriesBody lang="ko" t={ministries.ko} />;
}
