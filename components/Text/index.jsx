import { Text as TextStyle } from "./style";

const Text = ({ tag = "span", variant, children }) => (
  <TextStyle as={tag} variant={variant}>
    {children}
  </TextStyle>
);

export default Text;

