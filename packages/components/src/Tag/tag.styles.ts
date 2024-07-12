import { SerializedStyles, css } from "@emotion/react";
import { ColorType, ThreeLayoutModeType } from "../common.type";
import { fontVars } from "@mypjt/themes";
import { TagSizeType } from "./tag.types";
import { commonThreeModeStyle } from "../common.styles";

/** @설명 태그의 폰트는 모드에 따른 스위치 문  */
const tagFont = (size: TagSizeType): SerializedStyles => {
  switch (size) {
    case "md":
      return css`
        ${fontVars.typography.text.md}
      `;
    case "lg":
      return css`
        ${fontVars.typography.text.lg}
        padding: 4px 12px;
      `;
    default:
      return css`
        ${fontVars.typography.text.sm}
      `;
  }
};

export const tagStyle = (
  color: ColorType,
  mode: ThreeLayoutModeType,
  size: TagSizeType,
) => css`
  cursor: pointer;
  padding: 4px 4px;
  border-radius: 6px;
  display: flex;
  gap: 8px;
  ${commonThreeModeStyle(color, mode)}
  ${tagFont(size)}

  .tag-button{
    display: flex;
    align-items: center;
  }
`;
