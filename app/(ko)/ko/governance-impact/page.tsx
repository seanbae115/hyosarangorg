import type { Metadata } from "next";
import GovernanceImpactBody from "@/components/pages/GovernanceImpactBody";
import governanceImpact from "@/lib/content/governanceImpact";

export const metadata: Metadata = {
  title: governanceImpact.ko.metaTitle,
  description: governanceImpact.ko.metaDescription,
};

export default function Page() {
  return <GovernanceImpactBody lang="ko" t={governanceImpact.ko} />;
}
