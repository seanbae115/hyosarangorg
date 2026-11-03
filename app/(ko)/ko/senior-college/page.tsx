import type { Metadata } from "next";
import SeniorCollegeBody from "@/components/pages/SeniorCollegeBody";
import seniorCollege from "@/lib/content/seniorCollege";

export const metadata: Metadata = {
  title: seniorCollege.ko.metaTitle,
  description: seniorCollege.ko.metaDescription,
};

export default function Page() {
  return <SeniorCollegeBody lang="ko" t={seniorCollege.ko} />;
}
