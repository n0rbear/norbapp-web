import type { Metadata } from "next";
import { DatenschutzView, datenschutzMetadata } from "../../_views/LegalViews";

export const metadata: Metadata = datenschutzMetadata("de");

export default function Page() {
  return <DatenschutzView lang="de" />;
}
