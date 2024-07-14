import { css } from "@emotion/react";
import { ColorType, ThreeLayoutModeType } from "../common.type";
import { fontVars } from "@mypjt/themes";
import { commonThreeModeStyle } from "../common.styles";

/** @설명 뱃지의 폰트는 모드와 상관없이 하나이기에 변수로 설정  */
const badgeFont = fontVars.typography.heading.sm;

export const badgeStyle = (color: ColorType, mode: ThreeLayoutModeType) => css`
  width: fit-content;
  box-sizing: border-box;
  ${badgeFont}
  padding:2px 4px;
  border-radius: 4px;
  ${commonThreeModeStyle(color, mode)}
`;
