import { PageSection } from "../styles/commons";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Banner from "../components/Banner";
import fs from "node:fs/promises";
import path from "node:path";

import Head from "next/head";
import Description from "../components/Description";
import ThreeBlocks from "../components/TreeBlocks";
import { useTranslation } from "next-i18next";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

const getGalleryImages = async (relativeFolderPath) => {
  const absoluteFolderPath = path.join(process.cwd(), "public", relativeFolderPath);
  const files = await fs.readdir(absoluteFolderPath);

  return files
    .filter((fileName) => IMAGE_EXTENSIONS.has(path.extname(fileName).toLowerCase()))
    .sort((firstFileName, secondFileName) =>
      firstFileName.localeCompare(secondFileName, undefined, { numeric: true, sensitivity: "base" })
    )
    .map((fileName) => `/${path.posix.join(relativeFolderPath, fileName)}`);
};

const Home = ({ homeCardImages }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{`${t("siteTitle")} | ${t("homePageTitle")}`}</title>
        <meta name="description" content={t("homePageDescription")} />
        <meta
          property="og:title"
          content={`${t("siteTitle")} | ${t("homePageTitle")}`}
        />
        <meta property="og:description" content={t("homePageDescription")} />
      </Head>
      <PageSection>
        <Banner t={t} />
      </PageSection>
      <PageSection>
        <Description t={t} />
      </PageSection>
      <PageSection>
        <ThreeBlocks t={t} homeCardImages={homeCardImages} />
      </PageSection>
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  let homeCardImages = {};

  try {
    const [aptImages, neighborhoodImages] = await Promise.all([
      getGalleryImages("assets/gallery/apt"),
      getGalleryImages("assets/gallery/neighborhood"),
    ]);

    homeCardImages = {
      firstBlockImage: aptImages[0] ?? null,
      secondBlockImage: aptImages[1] ?? null,
      thirdBlockImage: neighborhoodImages[0] ?? null,
    };
  } catch {
    homeCardImages = {};
  }

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      homeCardImages,
    },
  };
};

export default Home;

