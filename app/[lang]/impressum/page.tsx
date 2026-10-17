import type { Metadata } from "next";
import { ImpressumView, impressumMetadata } from "../../_views/LegalViews";
import { resolveLanguage } from "../../i18n";

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  return impressumMetadata(resolveLanguage((await params).lang));
}

export default async function Page({ params }: Params) {
  return <ImpressumView lang={resolveLanguage((await params).lang)} />;
}
