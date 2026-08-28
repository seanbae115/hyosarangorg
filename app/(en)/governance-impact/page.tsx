import type { Metadata } from "next";
import GovernanceImpactBody from "@/components/pages/GovernanceImpactBody";
import governanceImpact from "@/lib/content/governanceImpact";

export const metadata: Metadata = {
  title: governanceImpact.en.metaTitle,
  description: governanceImpact.en.metaDescription,
};

export default function Page() {
  return <GovernanceImpactBody lang="en" t={governanceImpact.en} />;
}
