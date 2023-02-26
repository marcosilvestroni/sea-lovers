import Photos from "components/Photos";
import Head from "next/head";

const Gallery = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {t("siteTitle")} | {t("galleryPageTitle")}
        </title>
        <meta name="description" content={t("galleryPageDescription")} />
      </Head>
      <Photos />
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default Gallery;

