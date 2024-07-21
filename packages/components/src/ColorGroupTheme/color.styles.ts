import { css } from "@emotion/react";
import { vars } from "@mypjt/themes";
import { AllColorType } from "../common.type";
import { colorNumber } from "./Color";
export const ColorStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const colorNumStyle = css`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const colorDetailStyle = (
  colorName: AllColorType,
  colorNum: string,
  idx: number,
) => css`
  width: 60px;
  height: 60px;
  background-color: ${vars.colors.$scale[colorName][colorNum]};
  border: 1px solid ${vars.colors.$scale[colorName][colorNumber[idx]]};
  color: ${vars.colors.$scale[colorName][colorNumber[idx]]};
`;
