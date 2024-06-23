import { ColorType, CommonSizeType, ThreeLayoutModeType } from "../common.type";

export interface ButtonProps {
  text: string;
  color: ColorType;
  mode: ThreeLayoutModeType;
  size: CommonSizeType;
  onClickButton: () => void;
}
