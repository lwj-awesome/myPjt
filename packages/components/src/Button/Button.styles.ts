import { SerializedStyles, css } from "@emotion/react";
import { ColorType, CommonSizeType, ThreeLayoutModeType } from "../common.type";
import { fontVars } from "@mypjt/themes";
import { commonThreeModeStyle } from "../common.styles";

/** @desc Button, size에 따른 스윗치 */
const ButtonFont = (size: CommonSizeType): SerializedStyles => {
  switch (size) {
    case "lg":
      return css`
        ${fontVars.typography.heading.lg}
        padding: 4px 24px;
      `;
    case "md":
      return css`
        ${fontVars.typography.heading.md}
        padding: 4px 16px;
      `;
    case "sm":
      return css`
        ${fontVars.typography.heading.sm}
        padding: 4px 12px;
      `;
    default:
      return css`
        ${fontVars.typography.heading.xs}
        padding: 4px 8px;
      `;
  }
};

export const ButtonStyle = (
  color: ColorType,
  mode: ThreeLayoutModeType,
  size: CommonSizeType,
) => css`
  ${commonThreeModeStyle(color, mode)}
  ${ButtonFont(size)}
  border-radius: 6px;
`;
