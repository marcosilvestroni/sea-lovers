import { PageSection } from "./style";

import imageBanner from "../../assets/img/DSC_0603.JPG";
import Banner from "./sections/banner";
import Availability from "./sections/availability";
import Menu from "components/Menu";

const Home = () => {
  return (
    <>
      <Menu />
      <PageSection id="home">
        <Banner />
      </PageSection>
      <PageSection id="disponibilita">
        <Availability />
      </PageSection>
      <PageSection id="foto">foto</PageSection>
      <PageSection id="contatti">contatti</PageSection>
    </>
  );
};

export default Home;

