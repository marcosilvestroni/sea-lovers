import Text from "../Text";
import { MenuContainer, MenuItem } from "./styles";

const Menu = () => {
  return (
    <MenuContainer>
      <MenuItem href="#">
        <Text variant="menu-item">Home</Text>
      </MenuItem>
      <MenuItem href="#disponibilita">
        <Text variant="menu-item">Disponibilitá</Text>
      </MenuItem>
      <MenuItem href="#foto">
        <Text variant="menu-item">Foto</Text>
      </MenuItem>
      <MenuItem href="#contatti">
        <Text variant="menu-item">Contatti</Text>
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;

