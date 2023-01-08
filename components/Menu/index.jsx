import Text from "../Text";
import { MenuContainer } from "./styles";
import { slide as MenuRBM } from "react-burger-menu";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContainer>
      <MenuRBM
        right
        width={"100%"}
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
      >
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Text tag="span" variant="menu-item">
            Home
          </Text>
        </Link>
        <Link href="/availability" onClick={() => setIsOpen(false)}>
          <Text tag="span" variant="menu-item">
            Disponibilitá
          </Text>
        </Link>
        <Link href="/gallery" onClick={() => setIsOpen(false)}>
          <Text tag="span" variant="menu-item">
            Gallery
          </Text>
        </Link>
        <Link href="/contacts" onClick={() => setIsOpen(false)}>
          <Text tag="span" variant="menu-item">
            Contatti
          </Text>
        </Link>
      </MenuRBM>
    </MenuContainer>
  );
};

export default Menu;

