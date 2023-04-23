import ContactsComp from "../components/Contacts";
import WhereWeAre from "../components/WhereWeAre";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {t("siteTitle")} | {t("contactsPageTitle")}
        </title>
        <meta name="description" content={t("contactsPageDescription")} />
      </Head>
      <WhereWeAre />
      <ContactsComp t={t} />
    </>
  );
};
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default Contacts;

