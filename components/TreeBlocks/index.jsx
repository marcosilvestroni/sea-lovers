import Text from "components/Text";
import Image from "next/image";
import { TBImgWrapper, TBItem, TBText, ThreeBlocksWrapper } from "./style";
import img1 from "assets/gallery/apt/21.jpg";
import img2 from "assets/gallery/apt/5.JPG";
import img3 from "assets/gallery/apt/6.JPG";

const ThreeBlocks = ({ t }) => {
  return (
    <ThreeBlocksWrapper>
      <TBImgWrapper>
        <Image src={img1} alt={t("homePageBlock1")} fill />
        <TBItem>
          <TBText>
            <Text tag="h3" variant="sub-heading-shadow">
              {t("homePageBlock1")}
            </Text>
          </TBText>
        </TBItem>
      </TBImgWrapper>
      <TBImgWrapper>
        <Image src={img2} alt={t("homePageBlock2")} fill />
        <TBItem>
          <TBText>
            <Text tag="h3" variant="sub-heading-shadow">
              {t("homePageBlock2")}
            </Text>
          </TBText>
        </TBItem>
      </TBImgWrapper>
      <TBImgWrapper>
        <Image src={img3} alt={t("homePageBlock3")} fill />
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

