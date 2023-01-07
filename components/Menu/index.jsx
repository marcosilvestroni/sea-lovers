import Text from "../Text";
import { MenuContainer } from "./styles";
import { slide as MenuRBM } from "react-burger-menu";
import Link from "next/link";

const Menu = () => {
  return (
    <MenuContainer>
      <MenuRBM right width={"100%"}>
        <Link href="/">
          <Text tag="span" variant="menu-item">
            Home
          </Text>
        </Link>
        <Link href="/availability">
          <Text tag="span" variant="menu-item">
            Disponibilitá
          </Text>
        </Link>
        <Link href="/gallery">
          <Text tag="span" variant="menu-item">
            Gallery
          </Text>
        </Link>
        <Link href="/contatti">
          <Text tag="span" variant="menu-item">
            Contatti
          </Text>
        </Link>
      </MenuRBM>
    </MenuContainer>
  );
};

export default Menu;

