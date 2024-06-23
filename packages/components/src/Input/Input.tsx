import * as styles from "./input.styles";
import { InputProps } from "./input.types";

const Input = ({
  isRound = true,
  isDanger = false,
  isReadOnly = false,
  size = "sm",
  ...props
}: InputProps) => {
  size;
  return (
    <div css={styles.InputStyle(size, isRound, isDanger, isReadOnly)}>
      <input {...props} readOnly={isReadOnly} disabled={isReadOnly} />
    </div>
  );
};

export { Input };
