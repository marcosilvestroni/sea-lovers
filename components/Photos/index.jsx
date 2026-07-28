import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { withMediaQueries } from "../../utils/withMediaQueries";

import { imagesApt, imagesNbh } from "./images";
import {
  FullscreenBackdrop,
  FullscreenClose,
  FullscreenContent,
  FullscreenCounter,
  FullscreenFooter,
  FullscreenImageWrap,
  FullscreenNav,
  GalleryHeader,
  GalleryHint,
  GallerySection,
  GalleryWrapper,
  NavLink,
  NavList,
  SectionTitle,
  ThumbsGrid,
  ThumbButton,
  ThumbImage,
} from "./style";

const Photos = ({ t }) => {
  const sections = useMemo(
    () => [
      {
        id: "gallery-apt",
        title: t("galleryPageheader1"),
        images: imagesApt,
      },
      {
        id: "gallery-nbh",
        title: t("galleryPageheader2"),
        images: imagesNbh,
      },
    ],
    [t],
  );

  const allImages = useMemo(
    () =>
      sections.flatMap((section) =>
        section.images.map((image) => ({
          ...image,
          sectionTitle: section.title,
        })),
      ),
    [sections],
  );

  const indexBySrc = useMemo(
    () =>
      allImages.reduce((acc, image, index) => {
        acc[image.src] = index;

        return acc;
      }, {}),
    [allImages],
  );

  const [activeIndex, setActiveIndex] = useState(-1);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const isOpen = activeIndex >= 0;
  const activeImage = isOpen ? allImages[activeIndex] : null;

  const closeFullscreen = useCallback(() => setActiveIndex(-1), []);

  const showPrev = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex <= 0 ? allImages.length - 1 : prevIndex - 1,
    );
  }, [allImages.length]);

  const showNext = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex >= allImages.length - 1 ? 0 : prevIndex + 1,
    );
  }, [allImages.length]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeFullscreen();
      }

      if (event.key === "ArrowLeft") {
        showPrev();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeFullscreen, showPrev, showNext]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const onTouchStart = (event) => {
    setTouchEndX(0);
    setTouchStartX(event.targetTouches[0].clientX);
  };

  const onTouchMove = (event) => {
    setTouchEndX(event.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) {
      return;
    }

    const distance = touchStartX - touchEndX;

    if (distance > 40) {
      showNext();
    }

    if (distance < -40) {
      showPrev();
    }
  };

  return (
    <GalleryWrapper>
      <GalleryHeader>
        <h1>{t("galleryPageTitle")}</h1>
        <GalleryHint>{t("homeBannerSubTitle")}</GalleryHint>
      </GalleryHeader>

      <NavList>
        <NavLink href="#gallery-apt">{t("galleryPageheader1")}</NavLink>
        <NavLink href="#gallery-nbh">{t("galleryPageheader2")}</NavLink>
      </NavList>

      <GallerySection id="gallery-apt">
        <SectionTitle>{t("galleryPageheader1")}</SectionTitle>
        <ThumbsGrid>
          {imagesApt.map((image) => {
            const imageIndex = indexBySrc[image.src];

            return (
              <ThumbButton
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(imageIndex)}
                aria-label={`${t("galleryOpenImage")} ${t("galleryPageheader1")}`}
              >
                <ThumbImage style={{ aspectRatio: `${image.width} / ${image.height}` }}>
                  <Image src={image.src} alt={t("imageTypeApartment")} fill sizes="(max-width: 768px) 50vw, 25vw" />
                </ThumbImage>
              </ThumbButton>
            );
          })}
        </ThumbsGrid>
      </GallerySection>

      <GallerySection id="gallery-nbh">
        <SectionTitle>{t("galleryPageheader2")}</SectionTitle>
        <ThumbsGrid>
          {imagesNbh.map((image) => {
            const imageIndex = indexBySrc[image.src];

            return (
              <ThumbButton
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(imageIndex)}
                aria-label={`${t("galleryOpenImage")} ${t("galleryPageheader2")}`}
              >
                <ThumbImage style={{ aspectRatio: `${image.width} / ${image.height}` }}>
                  <Image src={image.src} alt={t("imageTypeNeibour")} fill sizes="(max-width: 768px) 50vw, 25vw" />
                </ThumbImage>
              </ThumbButton>
            );
          })}
        </ThumbsGrid>
      </GallerySection>

      {isOpen && activeImage && (
        <FullscreenBackdrop role="dialog" aria-modal="true" aria-label={t("galleryFullscreenLabel")}>
          <FullscreenClose type="button" onClick={closeFullscreen} aria-label={t("galleryCloseFullscreen")}>
            ×
          </FullscreenClose>

          <FullscreenNav
            type="button"
            onClick={showPrev}
            aria-label={t("galleryPreviousImage")}
            $side="left"
          >
            ‹
          </FullscreenNav>

          <FullscreenContent onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <FullscreenImageWrap>
              <Image
                src={activeImage.src}
                alt={activeImage.sectionTitle}
                fill
                sizes="100vw"
                priority
              />
            </FullscreenImageWrap>

            <FullscreenCounter>
              <strong>{activeImage.sectionTitle}</strong>
              <span>
                {activeIndex + 1} / {allImages.length}
              </span>
            </FullscreenCounter>

            <FullscreenFooter>
              <button
                type="button"
                onClick={closeFullscreen}
                aria-label={t("galleryCloseFullscreen")}
              >
                {t("galleryCloseFullscreen")}
              </button>
            </FullscreenFooter>
          </FullscreenContent>

          <FullscreenNav
            type="button"
            onClick={showNext}
            aria-label={t("galleryNextImage")}
            $side="right"
          >
            ›
          </FullscreenNav>
        </FullscreenBackdrop>
      )}
    </GalleryWrapper>
  );
};

export default withMediaQueries(Photos);

