import type { Metadata } from "next";
import FuelView, { fuelMetadata } from "../../_views/FuelView";

export const metadata: Metadata = fuelMetadata("de");

export default function Page() {
  return <FuelView lang="de" />;
}
