import Image from "next/image";
import Text from "../Text";
import Link from "next/link";
import {
  ActionsRow,
  ChipRow,
  HeroCard,
  HeroMedia,
  HeroShell,
  TextWapper,
} from "./style";

import { withMediaQueries } from "../../utils/withMediaQueries";

import { Overlay } from "../../styles/commons";

const Banner = ({ t, mediaIsPhone }) => {
  return (
    <HeroShell>
      <HeroMedia>
        <Image src="/assets/img/pool.webp" alt={t("imageGenericCaption")} fill priority />
        <TextWapper>
          {mediaIsPhone ? (
            <>
              <Text tag={"h1"} variant="heading-shadow">
                {t("homeBannerTitle1")}
              </Text>
              <Text tag={"h1"} variant="heading-shadow">
                {t("homeBannerTitle2")}
              </Text>
              <Text tag={"h1"} variant="heading-shadow-last">
                {t("homeBannerTitle3")}
              </Text>
            </>
          ) : (
            <Text tag={"h1"} variant="heading-shadow">
              {t("homeBannerTitle")}
            </Text>
          )}

          <Text tag={"h2"} variant="sub-heading-shadow">
            {t("homeBannerSubTitle")}
          </Text>

          <ChipRow>
            <span>50m Mare</span>
            <span>Centro Citta</span>
            <span>Family Friendly</span>
          </ChipRow>

          <ActionsRow>
            <Link href="/availability">{t("availabiliyTitle")}</Link>
            <Link href="/gallery">{t("galleryPageTitle")}</Link>
          </ActionsRow>
        </TextWapper>

        <Overlay />
      </HeroMedia>

      <HeroCard>
        <Text tag="p">{t("homePageDescrBlock6")}</Text>
      </HeroCard>
    </HeroShell>
  );
};

export default withMediaQueries(Banner);
