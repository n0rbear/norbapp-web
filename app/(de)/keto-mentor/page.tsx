import type { Metadata } from "next";
import KetoView, { ketoMetadata } from "../../_views/KetoView";

export const metadata: Metadata = ketoMetadata("de");

export default function Page() {
  return <KetoView lang="de" />;
}
