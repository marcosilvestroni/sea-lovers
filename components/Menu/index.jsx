import Text from "../Text";
import { MenuContainer, MenuItem } from "./styles";

const Menu = () => {
  return (
    <MenuContainer>
      <MenuItem href="#">
        <Text variant="menu-item">Home</Text>
      </MenuItem>
      <MenuItem href="#availability">
        <Text variant="menu-item">Disponibilitá</Text>
      </MenuItem>
      <MenuItem href="#photo">
        <Text variant="menu-item">Foto</Text>
      </MenuItem>
      <MenuItem href="#contacts">
        <Text variant="menu-item">Contatti</Text>
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;

