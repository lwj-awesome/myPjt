import { ColorType, ThreeLayoutModeType } from "../common.type";

export type TagSizeType = "sm" | "md" | "lg";
export interface TagProps {
  mode: ThreeLayoutModeType;
  text: string;
  color: ColorType;
  size: TagSizeType;
  onClickTagButton: () => void;
}
