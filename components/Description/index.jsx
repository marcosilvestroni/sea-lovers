import Image from "next/image";
import {
  DescriptionImage,
  DescriptionIntro,
  DescriptionText,
  DescriptionWrapper,
  HighlightsGrid,
  HighlightTile,
} from "./style";
import Text from "../Text";

const Description = ({ t }) => {
  const highlights = [
    t("homePageDescrBlock2"),
    t("homePageDescrBlock4"),
    t("homePageDescrBlock5"),
    t("homePageDescrBlock7"),
  ];

  return (
    <DescriptionWrapper>
      <DescriptionImage>
        <Image src="/assets/img/blue.jpg" alt={t("homePageDescrTitle")} fill />
      </DescriptionImage>

      <DescriptionText>
        <DescriptionIntro>
          <Text variant="heading" tag={"h2"}>
            {t("homePageDescrTitle")}
          </Text>

          <Text>{t("homePageDescrBlock1")}</Text>
          <Text>{t("homePageDescrBlock3")}</Text>
        </DescriptionIntro>

        <HighlightsGrid>
          {highlights.map((content, index) => (
            <HighlightTile key={`desc-${index}`}>
              <Text>{content}</Text>
            </HighlightTile>
          ))}
        </HighlightsGrid>
      </DescriptionText>
    </DescriptionWrapper>
  );
};

export default Description;
