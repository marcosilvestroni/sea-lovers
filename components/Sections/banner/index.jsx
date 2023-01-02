import Image from "next/image";
import Text from "components/Text";
import { TextWapper } from "./style";

import imageBanner from "assets/img/DSC_0603.JPG";
import { ContentWrapper } from "styles/commons";

const Banner = () => {
  return (
    <>
      <Image src={imageBanner} alt="Sea Lovers Home" fill />
      <ContentWrapper>
        <TextWapper>
          <Text tag={"h1"} variant="heading">
            Sea Lovers Italy Apartment
          </Text>
          <Text tag={"h3"} variant="sub-heading">
            un soggiorno accogliente e rigenerante
          </Text>
        </TextWapper>
      </ContentWrapper>
    </>
  );
};

export default Banner;

