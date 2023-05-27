import { TaxonomySlugProvider } from "@/context/state";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

const Base = ({
  title,
  meta_title,
  description,
  image,
  noindex,
  canonical,
  children,
}: any) => {
  const router = useRouter();

  return (
    <>
      <Head>{/* title */}</Head>

      {router.route !== "/posts/[single]" && (
        <TaxonomySlugProvider>
          <Header />
        </TaxonomySlugProvider>
      )}

      {/* main site */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Base;
