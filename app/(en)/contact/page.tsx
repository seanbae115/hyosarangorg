import type { Metadata } from "next";
import ContactBody from "@/components/pages/ContactBody";
import contact from "@/lib/content/contact";
import { pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: contact.en.metaTitle,
  description: contact.en.metaDescription,
  alternates: pageAlternates("/contact", "en"),
};

export default function Page() {
  return <ContactBody lang="en" t={contact.en} />;
}
