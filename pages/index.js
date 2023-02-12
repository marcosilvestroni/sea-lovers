import { PageSection } from "styles/commons";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Banner from "components/Banner";

import Head from "next/head";
import Description from "components/Description";
import ThreeBlocks from "components/TreeBlocks";
import { useTranslation } from "next-i18next";

const Home = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("homePageTitle")}</title>
        <meta
          name="description"
          content="Sea Lovers Italy Apartment Bed & Breakfast"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageSection>
        <Banner />
      </PageSection>
      <PageSection>
        <Description />
      </PageSection>
      <PageSection>
        <ThreeBlocks />
      </PageSection>
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default Home;

