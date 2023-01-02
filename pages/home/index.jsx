import { PageSection } from "./style";

import imageBanner from "../../assets/img/DSC_0603.JPG";
import Banner from "./sections/banner";
import Availability from "./sections/availability";
import Menu from "components/Menu";
import Photos from "./sections/photos";

const Home = () => {
  return (
    <>
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
      <PageSection id="contacts">contatti</PageSection>
    </>
  );
};

export default Home;

