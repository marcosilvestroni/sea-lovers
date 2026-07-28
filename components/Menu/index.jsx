import Text from "../Text";
import { MenuContainer } from "./styles";
import { slide as MenuRBM } from "react-burger-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("common");

  useEffect(() => {
    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    if (isOpen) {
      const scrollY = window.scrollY;

      htmlEl.classList.add("menu-open");
      bodyEl.classList.add("menu-open");
      bodyEl.style.position = "fixed";
      bodyEl.style.top = `-${scrollY}px`;
      bodyEl.style.left = "0";
      bodyEl.style.right = "0";
      bodyEl.style.width = "100%";
      bodyEl.dataset.scrollLockY = `${scrollY}`;

      return () => {
        const savedY = Number(bodyEl.dataset.scrollLockY || "0");

        htmlEl.classList.remove("menu-open");
        bodyEl.classList.remove("menu-open");
        bodyEl.style.position = "";
        bodyEl.style.top = "";
        bodyEl.style.left = "";
        bodyEl.style.right = "";
        bodyEl.style.width = "";
        delete bodyEl.dataset.scrollLockY;
        window.scrollTo(0, savedY);
      };
    }

    htmlEl.classList.remove("menu-open");
    bodyEl.classList.remove("menu-open");
    bodyEl.style.position = "";
    bodyEl.style.top = "";
    bodyEl.style.left = "";
    bodyEl.style.right = "";
    bodyEl.style.width = "";

    return undefined;
  }, [isOpen]);

  return (
    <MenuContainer>
      <MenuRBM
        right
        width={"min(86vw, 24rem)"}
        isOpen={isOpen}
        onStateChange={({ isOpen: nextIsOpen }) => setIsOpen(nextIsOpen)}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        customBurgerIcon={<span className="menu-icon menu-icon-burger" aria-hidden />}
        customCrossIcon={<span className="menu-icon menu-icon-close" aria-hidden />}
      >
        <Text tag="p" variant="menu-heading">
          Sea Lovers
        </Text>
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Text tag="span" variant="menu-item">
            {t("homePageTitle")}
          </Text>
        </Link>
        <Link href="/availability" onClick={() => setIsOpen(false)}>
          <Text tag="span" variant="menu-item">
            {t("availabiliyTitle")}
          </Text>
        </Link>
        <Link href="/gallery" onClick={() => setIsOpen(false)}>
          <Text tag="span" variant="menu-item">
            {t("galleryPageTitle")}
          </Text>
        </Link>

        <Link href="/contacts" onClick={() => setIsOpen(false)}>
          <Text tag="span" variant="menu-item">
            {t("contactsTitle")}
          </Text>
        </Link>

        <Text tag="p" variant="sub-menu-item">
          {t("homeBannerSubTitle")}
        </Text>
      </MenuRBM>
    </MenuContainer>
  );
};

export default Menu;

