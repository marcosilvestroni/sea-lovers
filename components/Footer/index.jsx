import Text from "components/Text";

const { FooterWrapper, FooterContent, FooterRow } = require("./style");

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterRow marginBottom>
          <Text tag="h4">Sea Lovers Italy Apartment</Text>
        </FooterRow>
        <FooterRow>
          <Text>via Fratelli Bandiera, 5</Text>
        </FooterRow>
        <FooterRow>
          <Text>62017 Porto Recenati MC</Text>
        </FooterRow>
        <FooterRow>
          <Text>Italy</Text>
        </FooterRow>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;

