import HomeView from "../_views/HomeView";
import { resolveLanguage } from "../i18n";

type Params = { params: Promise<{ lang: string }> };

export default async function Page({ params }: Params) {
  return <HomeView lang={resolveLanguage((await params).lang)} />;
}
