import Menu from "../Menu";
import Image from "next/image";
import { HeaderWrapper, ImageWrapper, MenuWrapper } from "./style";

import Logo from "/assets/img/logo_web.png";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isOnTop, setIsOnTop] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setIsOnTop(!Boolean(window.scrollY));
    });

    return document.removeEventListener("scoll", () => {
      setIsOnTop(!Boolean(window.scrollY));
    });
  });

  return (
    <HeaderWrapper isOnTop={isOnTop}>
      <Link href={"/"}>
        <ImageWrapper>
          <Image alt={t("imageGenericCaption")} src={Logo} />
        </ImageWrapper>
      </Link>
      <MenuWrapper>
        <Menu />
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;

