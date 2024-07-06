import { css } from "@emotion/react";
import {
  sub_background_color,
  table_back_color,
} from "../colorGroup/backgroundColorSet";
import { fontVars } from "@mypjt/themes";
import { sub_text_color } from "../colorGroup/textColorSet";

export const selectLayoutStyle = css`
  background-color: ${table_back_color};
  border-radius: 6px;
`;

export const selectStyle = css`
  width: inherit;
  height: 20px;
  padding: 8px;
  display: flex;
  justify-content: space-between;

  cursor: pointer;
  .icon-style {
    line-height: 150%;
  }
`;

export const selectTextStyle = css`
  ${fontVars.typography.text.sm}
  line-height: 120%;
`;

export const selectDataStyle = css`
  ${fontVars.typography.text.xs}
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const selectDataTextStyle = css`
  cursor: pointer;
  :hover {
    color: ${sub_text_color["gray"]};
  }
`;
