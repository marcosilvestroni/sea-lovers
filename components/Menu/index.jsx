import Text from "../Text";
import { MenuContainer } from "./styles";
import { slide as MenuRBM } from "react-burger-menu";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("common");

  return (
    <MenuContainer>
      <MenuRBM
        right
        width={"min(86vw, 24rem)"}
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        customCrossIcon={
          <Image
            src="/assets/img/cross-close.png"
            alt={t("imageGenericCaption")}
            width={24}
            height={24}
          />
        }
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

