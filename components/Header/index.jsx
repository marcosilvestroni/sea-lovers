import Menu from "../Menu";
import Image from "next/image";
import {
  CtaLink,
  HeaderActions,
  HeaderWrapper,
  ImageWrapper,
  Logo,
  MenuWrapper,
} from "./style";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import LanguageSwitcher from "../LanguageSwitcher";

const Header = () => {
  const [isOnTop, setIsOnTop] = useState(false);
  const { t } = useTranslation("common");

  useEffect(() => {
    const handleScroll = () => {
      setIsOnTop(!Boolean(window.scrollY));
    };

    handleScroll();
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderWrapper isOnTop={isOnTop}>
      <Logo>
        <Link href={"/"}>
          <ImageWrapper>
            <Image
              alt={t("imageGenericCaption")}
              src={"/assets/img/logo_web.png"}
              width={60}
              height={60}
            />
          </ImageWrapper>
        </Link>
      </Logo>

      <HeaderActions>
        <CtaLink href="/availability">{t("availabiliyTitle")}</CtaLink>
        <LanguageSwitcher />
        <MenuWrapper>
          <Menu />
        </MenuWrapper>
      </HeaderActions>
    </HeaderWrapper>
  );
};

export default Header;

