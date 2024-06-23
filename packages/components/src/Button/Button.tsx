import * as styles from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button = ({
  text = "Button",
  color = "red",
  mode = "outline",
  size = "md",
  onClickButton = () => console.log("click button"),
}: ButtonProps) => {
  return (
    <div onClick={onClickButton} css={styles.ButtonStyle(color, mode, size)}>
      {text}
    </div>
  );
};

export { Button };
