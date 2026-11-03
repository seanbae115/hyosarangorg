import type { Metadata } from "next";
import ContactBody from "@/components/pages/ContactBody";
import contact from "@/lib/content/contact";
import { pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: contact.ko.metaTitle,
  description: contact.ko.metaDescription,
  alternates: pageAlternates("/contact", "ko"),
};

export default function Page() {
  return <ContactBody lang="ko" t={contact.ko} />;
}
