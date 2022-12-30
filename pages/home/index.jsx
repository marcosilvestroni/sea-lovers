import { PageSection, TextHeader, TextWapper } from "./style";
import Image from "next/image";
import Menu from "../../components/Menu";
import Text from "../../components/Text";

import imageBanner from "../../assets/img/DSC_0603.JPG";

const Home = () => {
  return (
    <>
      <Menu />
      <PageSection id="home">
        <Image src={imageBanner} alt="Sea Lovers Home" fill />
        <TextHeader>
          <TextWapper>
            <Text tag={"h1"} variant="heading">
              Sea Lovers Italy Apartment
            </Text>
            <Text tag={"h3"} variant="sub-heading">
              un soggiorno accogliente e rigenerante
            </Text>
          </TextWapper>
        </TextHeader>
      </PageSection>
      <PageSection id="disponibilita"></PageSection>
      <PageSection id="foto">foto</PageSection>
      <PageSection id="contatti">contatti</PageSection>
    </>
  );
};

export default Home;

