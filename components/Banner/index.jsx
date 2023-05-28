import Image from "next/image";
import Text from "../Text";
import { TextWapper } from "./style";

import { withMediaQueries } from "../../utils/withMediaQueries";

import { ContentWrapper, Overlay } from "../../styles/commons";

const Banner = ({ t, mediaIsPhone }) => {
  return (
    <>
      <Image src="/assets/img/pool.webp" alt={t("imageGenericCaption")} fill />
      <ContentWrapper>
        <Overlay />
        <TextWapper>
          {mediaIsPhone ? (
            <>
              <Text tag={"h1"} variant="heading-shadow">
                {t("homeBannerTitle1")}
              </Text>
              <Text tag={"h1"} variant="heading-shadow">
                {t("homeBannerTitle2")}
              </Text>
              <Text tag={"h1"} variant="heading-shadow">
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
        </TextWapper>
      </ContentWrapper>
    </>
  );
};

export default withMediaQueries(Banner);
