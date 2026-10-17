import type { Metadata } from "next";
import { ImpressumView, impressumMetadata } from "../../_views/LegalViews";

export const metadata: Metadata = impressumMetadata("de");

export default function Page() {
  return <ImpressumView lang="de" />;
}
