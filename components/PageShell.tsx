import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import type { Lang } from "@/lib/nav";

/**
 * Wraps every page body with the site header, the <main> landmark, the
 * footer, and the shared lightbox. `currentPath` is the English-canonical
 * path of the page.
 */
export default function PageShell({
  lang,
  currentPath,
  children,
}: {
  lang: Lang;
  currentPath: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header lang={lang} currentPath={currentPath} />
      <main id="main">{children}</main>
      <Footer lang={lang} />
      <Lightbox lang={lang} />
    </>
  );
}
