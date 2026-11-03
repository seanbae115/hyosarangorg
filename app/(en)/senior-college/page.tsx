import type { Metadata } from "next";
import SeniorCollegeBody from "@/components/pages/SeniorCollegeBody";
import seniorCollege from "@/lib/content/seniorCollege";
import { pageAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: seniorCollege.en.metaTitle,
  description: seniorCollege.en.metaDescription,
  alternates: pageAlternates("/senior-college", "en"),
};

export default function Page() {
  return <SeniorCollegeBody lang="en" t={seniorCollege.en} />;
}
