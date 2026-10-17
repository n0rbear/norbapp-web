import type { Metadata } from "next";
import { DatenschutzView, datenschutzMetadata } from "../../_views/LegalViews";
import { resolveLanguage } from "../../i18n";

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  return datenschutzMetadata(resolveLanguage((await params).lang));
}

export default async function Page({ params }: Params) {
  return <DatenschutzView lang={resolveLanguage((await params).lang)} />;
}
