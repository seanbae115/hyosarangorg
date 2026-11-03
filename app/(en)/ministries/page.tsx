import type { Metadata } from "next";
import MinistriesBody from "@/components/pages/MinistriesBody";
import ministries from "@/lib/content/ministries";

export const metadata: Metadata = {
  title: ministries.en.metaTitle,
  description: ministries.en.metaDescription,
};

export default function Page() {
  return <MinistriesBody lang="en" t={ministries.en} />;
}
