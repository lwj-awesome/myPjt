import * as styles from "./input.styles";
import { InputProps } from "./input.types";

const Input = ({
  isRound = true,
  isDanger = false,
  isReadOnly = false,
  size = "lg",
  ...props
}: InputProps) => {
  return (
    <input
      css={styles.InputStyle(size, isRound, isDanger, isReadOnly)}
      readOnly={isReadOnly}
      disabled={isReadOnly}
      {...props}
    />
  );
};

export { Input };
