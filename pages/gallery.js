import Photos from "../components/Photos";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{`${t("siteTitle")} | ${t("galleryPageTitle")}`}</title>
        <meta name="description" content={t("galleryPageDescription")} />
        <meta
          property="og:title"
          content={`${t("siteTitle")} | ${t("galleryPageTitle")}`}
        />
        <meta property="og:description" content={t("galleryPageDescription")} />
      </Head>
      <Photos t={t} />
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default Gallery;

