import { css } from "@emotion/react";
import { table_back_color } from "../colorGroup/backgroundColorSet";
import { fontVars } from "@mypjt/themes";
import { sub_text_color } from "../colorGroup/textColorSet";
import { sub_border_color } from "../colorGroup/borderColorSet";
export const accordianLayoutStyle = (width: number) => css`
  width: ${width}px;
  background-color: ${table_back_color};
  border-radius: 6px;
`;

export const accordianStyle = css`
  height: 20px;
  padding: 8px;
  display: flex;
  justify-content: space-between;

  cursor: pointer;
  .icon-style {
    line-height: 150%;
  }
`;

export const accordianTextStyle = css`
  ${fontVars.typography.text.sm}
  line-height: 120%;
`;
export const accordianContentStyle = css`
  ${fontVars.typography.text.xs}
  padding: 6px;
  border-top: 1px solid ${sub_border_color["gray"]};
`;
