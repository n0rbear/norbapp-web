import type { Metadata } from "next";
import FuelView, { fuelMetadata } from "../../_views/FuelView";
import { resolveLanguage } from "../../i18n";

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  return fuelMetadata(resolveLanguage((await params).lang));
}

export default async function Page({ params }: Params) {
  return <FuelView lang={resolveLanguage((await params).lang)} />;
}
