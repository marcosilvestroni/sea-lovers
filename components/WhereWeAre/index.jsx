import Text from "../Text";

import { FooterWrapper } from "./style";

const WhereWeAre = () => {
  return (
    <FooterWrapper>
      <Text tag="h4">Sea Lovers Italy Apartment</Text>
      <Text>via Fratelli Bandiera, 5</Text>
      <Text>62017 Porto Recanati MC</Text>
      <Text>Italy</Text>
      <Text>
        <a
          href="https://goo.gl/maps/KCES9iouPQFa4bYk6"
          target="_blank"
          alt="Google Maps"
          rel="noreferrer"
        >
          Google Maps
        </a>
      </Text>
    </FooterWrapper>
  );
};

export default WhereWeAre;

