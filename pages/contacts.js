import ContactsComp from "components/Contacts";
import Head from "next/head";

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
      <ContactsComp />
    </>
  );
};
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default Contacts;

