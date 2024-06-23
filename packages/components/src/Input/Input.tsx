import { HTMLAttributes } from "react";
import { CommonSizeType } from "../common.type";
import * as styles from "./input.styles";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  size: CommonSizeType;
  isDanger: boolean;
  isReadOnly: boolean;
  isRound: boolean;
}

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
