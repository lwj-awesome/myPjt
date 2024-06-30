import { HTMLAttributes } from "react";
import { ColorType } from "../common.type";
export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
  color: ColorType;
  value: string;
  isReadOnly: boolean;
  text: string;
}
