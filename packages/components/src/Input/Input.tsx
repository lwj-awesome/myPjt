import * as styles from "./input.styles";
import { InputProps } from "./input.types";

const Input = ({
  isRound = true,
  isDanger = false,
  isReadOnly = false,
  size = "lg",
  ...props
}: InputProps) => {
  size;
  return (
    <>
      <input
        css={styles.InputStyle(size, isRound, isDanger, isReadOnly)}
        {...props}
        readOnly={isReadOnly}
        disabled={isReadOnly}
      />
    </>
  );
};

export { Input };
