import type { Metadata } from "next";
import AboutBody from "@/components/pages/AboutBody";
import about from "@/lib/content/about";

export const metadata: Metadata = {
  title: about.en.metaTitle,
  description: about.en.metaDescription,
};

export default function Page() {
  return <AboutBody lang="en" t={about.en} />;
}
