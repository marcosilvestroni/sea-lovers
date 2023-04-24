import Image from "next/image";
import { DescriptionImage, DescriptionText, DescriptionWrapper } from "./style";
import Text from "../Text";

const Description = ({ t }) => {
  return (
    <DescriptionWrapper>
      <DescriptionText>
        <Text variant="heading" tag={"h2"}>
          {t("homePageDescrTitle")}
        </Text>

        <Text>{t("homePageDescrBlock1")}</Text>
        <Text>{t("homePageDescrBlock2")}</Text>
        <Text>{t("homePageDescrBlock3")}</Text>
        <Text>{t("homePageDescrBlock4")}</Text>
        <Text>{t("homePageDescrBlock5")}</Text>
        <Text>{t("homePageDescrBlock6")}</Text>
        <Text>{t("homePageDescrBlock7")}</Text>
      </DescriptionText>
      <DescriptionImage>
        <Image src="/assets/img/blue.JPG" alt={t("homePageDescrTitle")} fill />
      </DescriptionImage>
    </DescriptionWrapper>
  );
};

export default Description;

