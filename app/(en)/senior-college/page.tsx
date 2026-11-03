import type { Metadata } from "next";
import SeniorCollegeBody from "@/components/pages/SeniorCollegeBody";
import seniorCollege from "@/lib/content/seniorCollege";

export const metadata: Metadata = {
  title: seniorCollege.en.metaTitle,
  description: seniorCollege.en.metaDescription,
};

export default function Page() {
  return <SeniorCollegeBody lang="en" t={seniorCollege.en} />;
}
