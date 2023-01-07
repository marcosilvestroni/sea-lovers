import { PageSection } from "styles/commons";

import Banner from "components/Banner";

import Head from "next/head";
import Description from "components/Description";
import ThreeBlocks from "components/TreeBlocks";

const Home = () => {
  return (
    <>
      <Head>
        <title>Sea Lovers Italy Apartment</title>
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

export default Home;

