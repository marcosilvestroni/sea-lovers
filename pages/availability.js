import AvailabilityComp from "../components/Availability";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "react-i18next";

const Availability = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {t("siteTitle")} | {t("availabiliyTitle")}
        </title>
        <meta name="description" content={t("availabilityDescription")} />
        <meta
          property="og:title"
          content={`${t("siteTitle")} | ${t("availabiliyTitle")}`}
        />
        <meta
          property="og:description"
          content={t("availabilityDescription")}
        />
      </Head>
      <AvailabilityComp t={t} />
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default Availability;

