import { Text as TextStyle } from "./style";

const Text = ({ tag = "p", variant, children }) => (
  <TextStyle as={tag} variant={variant}>
    {children}
  </TextStyle>
);

export default Text;

