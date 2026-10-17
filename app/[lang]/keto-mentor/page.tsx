import type { Metadata } from "next";
import KetoView, { ketoMetadata } from "../../_views/KetoView";
import { resolveLanguage } from "../../i18n";

type Params = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  return ketoMetadata(resolveLanguage((await params).lang));
}

export default async function Page({ params }: Params) {
  return <KetoView lang={resolveLanguage((await params).lang)} />;
}
