import { HTMLAttributes } from "react";
import { ColorType } from "../common.type";

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  value: string | number;
  checkColor?: ColorType;
  isReadOnly: boolean;
}
