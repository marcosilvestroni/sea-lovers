import { PageSection } from "styles/commons";

import imageBanner from "assets/img/DSC_0603.JPG";
import Banner from "components/Sections/banner";
import Availability from "components/Sections/availability";
import Menu from "components/Menu";
import Photos from "components/Sections/photos";
import Contacts from "components/Sections/contacts";

import Head from "next/head";

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
      <Menu />
      <PageSection id="home">
        <Banner />
      </PageSection>
      <PageSection id="availability">
        <Availability />
      </PageSection>
      <PageSection id="photo">
        <Photos />
      </PageSection>
      <PageSection id="contacts">
        <Contacts />
      </PageSection>
    </>
  );
};

export default Home;

