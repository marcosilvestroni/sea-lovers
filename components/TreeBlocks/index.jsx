import Text from "components/Text";
import Image from "next/image";
import { Overlay } from "styles/commons";
import { TBImgWrapper, TBItem, TBText, ThreeBlocksWrapper } from "./style";
import img1 from "assets/gallery/21.jpg";
import img2 from "assets/gallery/7.JPG";
import img3 from "assets/gallery/6.JPG";

const ThreeBlocks = () => {
  return (
    <ThreeBlocksWrapper>
      <TBImgWrapper>
        <Image src={img1} alt="Check-out flessibile" fill />
        <TBItem>
          <Overlay />
          <TBText>
            <Text tag="h3" variant="sub-heading">
              Check-out flessibile
            </Text>
            {/* <Text variant="sub-heading">Perché siamo i migliori</Text> */}
          </TBText>
        </TBItem>
      </TBImgWrapper>
      <TBImgWrapper>
        <Image src={img2} alt="Wi-Fi gratuito" fill />
        <TBItem>
          <Overlay />
          <TBText>
            <Text tag="h3" variant="sub-heading">
              Wi-Fi gratuito
            </Text>
            {/* <Text variant="sub-heading">Perché siamo i migliori</Text> */}
          </TBText>
        </TBItem>
      </TBImgWrapper>
      <TBImgWrapper>
        <Image src={img3} alt="Wi-Fi gratuito" fill />
        <TBItem>
          <Overlay />
          <TBText>
            <Text tag="h3" variant="sub-heading">
              Cordialitá ed ospitalitá
            </Text>
            {/* <Text variant="sub-heading">Perché siamo i migliori</Text> */}
          </TBText>
        </TBItem>
      </TBImgWrapper>
    </ThreeBlocksWrapper>
  );
};

export default ThreeBlocks;

