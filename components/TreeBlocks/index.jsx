import Text from "components/Text";
import { Overlay } from "styles/commons";
import { TBItem, TBText, ThreeBlocksWrapper } from "./style";

const ThreeBlocks = () => {
  return (
    <ThreeBlocksWrapper>
      <TBItem>
        <Overlay />
        <TBText>
          <Text tag="h3" variant="sub-heading">
            Check-out flessibile
          </Text>
          <Text variant="sub-heading">Perché siamo i migliori</Text>
        </TBText>
      </TBItem>
      <TBItem>
        <Overlay />
        <TBText>
          <Text tag="h3" variant="sub-heading">
            Wi-Fi gratuito
          </Text>
          <Text variant="sub-heading">Perché siamo i migliori</Text>
        </TBText>
      </TBItem>
      <TBItem>
        <Overlay />
        <TBText>
          <Text tag="h3" variant="sub-heading">
            Cordialitá ed ospitalitá
          </Text>
          <Text variant="sub-heading">Perché siamo i migliori</Text>
        </TBText>
      </TBItem>
    </ThreeBlocksWrapper>
  );
};

export default ThreeBlocks;

