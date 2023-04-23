import Text from "../Text";
import Image from "next/image";
import { TBImgWrapper, TBItem, TBText, ThreeBlocksWrapper } from "./style";

const ThreeBlocks = ({ t }) => {
  return (
    <ThreeBlocksWrapper>
      <TBImgWrapper>
        <Image
          src="/assets/gallery/apt/21.jpg"
          alt={t("homePageBlock1")}
          fill
        />
        <TBItem>
          <TBText>
            <Text tag="h3" variant="sub-heading-shadow">
              {t("homePageBlock1")}
            </Text>
          </TBText>
        </TBItem>
      </TBImgWrapper>
      <TBImgWrapper>
        <Image src="/assets/gallery/apt/5.jpg" alt={t("homePageBlock2")} fill />
        <TBItem>
          <TBText>
            <Text tag="h3" variant="sub-heading-shadow">
              {t("homePageBlock2")}
            </Text>
          </TBText>
        </TBItem>
      </TBImgWrapper>
      <TBImgWrapper>
        <Image src="/assets/gallery/apt/6.jpg" alt={t("homePageBlock3")} fill />
        <TBItem>
          <TBText>
            <Text tag="h3" variant="sub-heading-shadow">
              {t("homePageBlock3")}
            </Text>
          </TBText>
        </TBItem>
      </TBImgWrapper>
    </ThreeBlocksWrapper>
  );
};

export default ThreeBlocks;

