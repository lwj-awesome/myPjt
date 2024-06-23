import { ColorType, ThreeLayoutModeType } from "../common.type";

export type ButtonSizeType = "lg" | "md" | "sm" | "xs";

export interface ButtonProps {
  text: string;
  color: ColorType;
  mode: ThreeLayoutModeType;
  size: ButtonSizeType;
  onClickButton: () => void;
}
