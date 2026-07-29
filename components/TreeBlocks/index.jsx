import Text from "../Text";
import Image from "next/image";
import Link from "next/link";
import {
  TBCard,
  TBCardBody,
  TBImgWrapper,
  TBItem,
  TBText,
  ThreeBlocksWrapper,
} from "./style";

const ThreeBlocks = ({ t, homeCardImages = {} }) => {
  const cards = [
    {
      image: homeCardImages.firstBlockImage ?? "/assets/gallery/apt/21.jpg",
      title: t("homePageBlock1"),
      link: "/availability",
      cta: t("availabiliyTitle"),
    },
    {
      image: homeCardImages.secondBlockImage ?? "/assets/gallery/apt/5.jpg",
      title: t("homePageBlock2"),
      link: "/gallery",
      cta: t("galleryPageTitle"),
    },
    {
      image: homeCardImages.thirdBlockImage ?? "/assets/gallery/apt/6.jpg",
      title: t("homePageBlock3"),
      link: "/contacts",
      cta: t("contactsTitle"),
    },
  ];

  return (
    <ThreeBlocksWrapper>
      {cards.map((card) => (
        <TBCard key={card.title}>
          <TBImgWrapper>
            <Image src={card.image} alt={card.title} fill />
            <TBItem />
          </TBImgWrapper>

          <TBCardBody>
            <TBText>
              <Text tag="h3" variant="sub-heading-shadow">
                {card.title}
              </Text>
            </TBText>
            <Link href={card.link}>{card.cta}</Link>
          </TBCardBody>
        </TBCard>
      ))}
    </ThreeBlocksWrapper>
  );
};

export default ThreeBlocks;

