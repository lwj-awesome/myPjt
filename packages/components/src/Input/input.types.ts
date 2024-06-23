import { CommonSizeType } from "../common.type";
import { HTMLAttributes } from "react";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  size: CommonSizeType;
  isDanger: boolean;
  isReadOnly: boolean;
  isRound: boolean;
}
