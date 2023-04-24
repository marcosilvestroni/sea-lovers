import Text from "../Text";
import { MenuContainer } from "./styles";
import { slide as MenuRBM } from "react-burger-menu";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <MenuContainer>
      <MenuRBM
        right
        width={"100%"}
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        customCrossIcon={
          <Image
            src="/assets/img/cross-close.png"
            alt={t("imageGenericCaption")}
            width={90}
            height={90}
          />
        }
      >
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Text tag="span" variant="menu-item">
            Home
          </Text>
        </Link>
        <Link href="/availability" onClick={() => setIsOpen(false)}>
          <Text tag="span" variant="menu-item">
            {t("availabiliyTitle")}
          </Text>
        </Link>
        <Link href="/gallery" onClick={() => setIsOpen(false)}>
          <Text tag="span" variant="menu-item">
            Gallery
          </Text>
        </Link>
        {/* <Link href="/gallery#apt" onClick={() => setIsOpen(false)}>
          <Text tag="span" variant="sub-menu-item">
            L'Appartamento
          </Text>
        </Link>
        <Link href="/gallery#nbh" onClick={() => setIsOpen(false)}>
          <Text tag="span" variant="sub-menu-item">
            Dintorni
          </Text>
        </Link> */}
        <Link href="/contacts" onClick={() => setIsOpen(false)}>
          <Text tag="span" variant="menu-item">
            {t("contactsTitle")}
          </Text>
        </Link>
      </MenuRBM>
    </MenuContainer>
  );
};

export default Menu;

