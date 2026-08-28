import type { Metadata } from "next";
import ContactBody from "@/components/pages/ContactBody";
import contact from "@/lib/content/contact";

export const metadata: Metadata = {
  title: contact.en.metaTitle,
  description: contact.en.metaDescription,
};

export default function Page() {
  return <ContactBody lang="en" t={contact.en} />;
}
